# My Way to Learn NodeJS - JWT Basics

This repo contains my third project for learning Backend using Express.js, focusing on JWT (JSON Web Token) basics. The project demonstrates how to implement user basic authentication using JWTs, including login and protected routes.

## Features

- User login with JWT creation
- Protected routes accessible only with valid JWT
- Error handling for authentication and other errors

### Prerequisites

- Node.js
- npm (Node Package Manager)
- MongoDB

## Getting Started

## Endpoints

- `POST /api/v1/login`: Login with username and password to receive a JWT
- `GET /api/v1/dashboard`: Access protected route with a valid JWT

## Usage

1. Clone the repository.
2. Create a `.env` file in the root directory and add your PORT and JWT secret:
    ```
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the server.
5. Use a tool like Postman to test the endpoints.

## Technologies Used

- Node.js
- Express.js
- JWT (jsonwebtoken)
- dotenv
- express-async-errors
- http-status-codes
- mongoose