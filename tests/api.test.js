import { expect, test, describe, vi } from 'vitest';
const request = require('supertest');
const app = require('../app.js');
const models = require('../models');
const User = models.User;

// Mock the User model's methods
vi.mock('../models', () => {
  return {
    models: {
      User: {
        findOne: vi.fn(),
        create: vi.fn(),
      },
    },
  };
});



describe('User Controller Tests', () => {
  test('POST /user/sign-up - User created successfully', async () => {
    // Mock the User.findOne method to return null
    User.findOne.mockResolvedValue(null);

    // Mock the User.create method to return a user object
    User.create.mockResolvedValue({
      name: 'new_user',
      email: 'new@example.com',
      password: 'new_password',
    });

    const response = await request(app)
      .post('/user/sign-up')
      .send({
        username: 'new_user',
        email: 'new@example.com',
        password: 'new_password',
      });

    expect(response.status).toBe(201); // Expect created status
    expect(response.body).toHaveProperty('message', 'User created successfully');
  });

  test('POST /user/sign-up - Email already exists', async () => {
    // Mock the User.findOne method to return a user object
    User.findOne.mockResolvedValue({
      name: 'existing_user',
      email: 'existing@example.com',
      password: 'existing_password',
    });

    const response = await request(app)
      .post('/user/sign-up')
      .send({
        username: 'existing_user',
        email: 'existing@example.com',
        password: 'existing_password',
      });

    expect(response.status).toBe(409); // Expect conflict status
    expect(response.body).toHaveProperty('message', 'Email already exists!');
  });

  test('POST /user/sign-up - Internal server error', async () => {
    // Mock the User.findOne method to throw an error
    User.findOne.mockRejectedValue(new Error('Internal server error'));

    const response = await request(app)
      .post('/user/sign-up')
      .send({
        username: 'new_user',
        email: 'new@example.com',
        password: 'new_password',
      });

    expect(response.status).toBe(500); // Expect internal server error status
    expect(response.body).toHaveProperty('message', 'Something went wrong!');
  });
});

describe('API tests blog-posts routes', () => {
  test('GET /posts', async () => {
    const response = await request(app).get('/posts');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body[0]).toHaveProperty('id');
    expect(response.body[0]).toHaveProperty('title');
    expect(response.body[0]).toHaveProperty('content');
  });
  test('GET /posts/:id', async () => {
    const response = await request(app).get('/posts/1');
    expect(response.status).toBe(200);
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body).toHaveProperty('id');
    expect(response.body.id).toBe(1);
    expect(response.body).toHaveProperty('title');
    expect(response.body).toHaveProperty('content');
  });
})