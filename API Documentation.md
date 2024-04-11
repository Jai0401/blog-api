# API Documentation
## Overview
The blog-api is designed to manage posts, comments, user registration, and authentication using a JWT token. Below, we’ll delve into the specifics of this API.

## Endpoints

- ### User Sign-up
  - Endpoint: POST `/user/sign-up`
  - Description: Registers a new user.
  - Request Format:
    ```json
    {
      "name": "example_user",
      "email": "example@example.com",
      "password": "your_password"
    }
    ```
  - Response Format: Success message or error message.

- ### User Login
  - Endpoint: POST `/user/login`
  - Description: Logs in a user.
  - Request Format:
    ```json
    {
      "email": "example@example.com",
      "password": "your_password"
    }
    ```
  - Response Format: JSON object containing JWT token or error message.
- ### Retrieve All Posts
  - Endpoint: GET `/posts`
  - Description: Fetches a list of all blog posts.
  - Response Format: JSON array containing post objects.
  - Authentication: No authentication required.

- ### Retrieve a Specific Post
  - Endpoint: GET `posts/:postId`
  - Description: Retrieves details of a specific post.
  - Response Format: JSON object representing the post.
  - Authentication: No authentication required.

- ### Create a New Post
  - Endpoint: POST `/posts`
  - Description: Creates a new blog post.
  - Request Format:
    ```json
    {
      "title": "Sample Post",
      "content": "This is a sample post content."
    }
    ```
  - Response Format: JSON object representing the newly created post.
  - Authentication: Requires a valid JWT token.

- ### Update an Existing Post
  - Endpoint: PUT `posts/:postId`
  - Description: Updates an existing post.
  - Request Format: JSON object with updated post content.
  - Response Format: JSON object representing the updated post.
  - Authentication: Requires a valid JWT token.

- ### Delete a Post
  - Endpoint: DELETE `posts/:postId`
  - Description: Deletes a specific post.
  - Response Format: Success message.
  - Authentication: Requires a valid JWT token.

- ### Testing route
  - Endpoint: GET `test/associations`

- ### Category creation
  - Endpoint: POST `/category`
  - Description: Creates new category.
  - Response Format: Success message with category details.


## Authentication
To access protected endpoints (create, update, delete), include a valid JWT token in the request headers.
Obtain the token by authenticating via the login endpoint (POST `user/sign-up`, POST `user/login`).
