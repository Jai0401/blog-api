# Blog API Documentation
## Overview
The blog-api is designed to manage posts, comments, user registration, and authentication using a JWT token. Below, we’ll delve into the specifics of this API.

## Endpoints

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
  - Request Format: JSON object with post content.
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


## Authentication
To access protected endpoints (create, update, delete), include a valid JWT token in the request headers.
Obtain the token by authenticating via the login endpoint (POST user/login).
