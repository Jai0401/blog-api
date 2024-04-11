# Blog API

The **Blog API** is a simple RESTful API for managing blog posts, built using Node.js and MySQL.

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Testing](#testing)
- [Endpoints](#endpoints)

## Installation

1. Clone this repository:
  ```
  git clone https://github.com/Jai0401/blog-api.git
  ```
2. Install dependencies:
  ```
  cd blog-api
  npm install
  ```
3. Set up your environment variables (e.g., database connection details).
4. Run migrations to create database tables:
```
npx sequelize-cli db:migrate
```

## Usage

1. Start the server:
  ```
  npm start
  ```

2. Access the API at `http://localhost:3000`.

## Testing
```
npm test
```

## Endpoints

- **GET /posts**: Get a list of all blog posts.
- **GET /posts/:id**: Get a specific blog post by ID.
- **POST /posts**: Create a new blog post.
- **PUT /posts/:id**: Update an existing blog post.
- **DELETE /posts/:id**: Delete a blog post.

Checkout [API Documentation](https://github.com/Jai0401/blog-api/blob/master/API%20Documentation.md) for more details.

