# Blog API

## Project Overview

This project involves developing a Blog API using the MSC (Model-Service-Controller) architecture. The API allows for the management of blog content, including operations like creating, viewing, updating, and deleting blog posts. MySQL with Sequelize as the ORM is used for data management, and the API follows RESTful principles.

## Development

### Technologies

- Node.js
- Express.js
- MySQL
- Sequelize
- JavaScript
- Jest
- Supertest
- ESLint
- Joi
- Docker
- Docker Compose
- JWT

### Project Structure

The project is structured around multiple endpoints, each serving a specific function. Below are the key endpoints:

- **POST /login:** Validate user credentials and return a JWT token.
- **POST /user:** Create a new user.
- **GET /user:** Retrieve user information.
- **GET /user/:id:** Retrieve a specific user by ID.
- **POST /categories:** Create a new category.
- **GET /categories:** Retrieve all categories.
- **POST /posts:** Create a new blog post.
- **GET /posts:** Retrieve all blog posts.
- **GET /posts/:id:** Retrieve a specific blog post by ID.
- **PUT /posts/:id:** Update a specific blog post by ID.

## Project Requirements

### Installation and Setup Instructions

1. Clone this repository:

```bash
git clone https://github.com/gabrielcarballo/blog-api.git
```

### Installation via Docker:

```bash
docker compose up -d
docker exec -it blogs_api bash
npm install
```

## Create a .env file in the root directory of the project and add the following environment variables or use the provided .env.example file as a template:

```env
NODE_ENV=development
API_PORT=3001
API_HOST=localhost
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=root
MYSQL_PASSWORD=password
JWT_SECRET=your_secret
```

## Usage Instructions

### Since this project is an API, interact with it using API calls. Use tools like Postman or curl to make requests following the Project Structure.


## Examples

Here are some examples:

- To retrieve all blog posts:
  GET /posts

- To retrieve a specific blog post by ID:
  GET /posts/:id

- To create a new blog post:
  POST /posts

## Feedback

Your feedback is crucial! Please provide insights and suggestions regarding the project. I'm eager to incorporate any improvements you may suggest.

## Portfolio

Check out my [portfolio](https://my-folio-weld.vercel.app/) for more of my work!
