# RESTful API with Express and MongoDB

This project provides a RESTful API using Express.js and MongoDB. It allows users to access routes to make API calls for a Wikipedia-like database. Users can perform operations such as retrieving articles, creating new articles, updating existing articles, and deleting articles.

## Prerequisites

Before setting up and using this project, ensure that you have the following installed:

- [Node.js](https://nodejs.org/en)
- [MongoDB](https://www.mongodb.com/try/download/community)

## Installation

1. Clone the repository to your local machine:
```bash
git clone https://github.com/your-username/express-mongodb-rest-api.git
```
2. Navigate to the project directory:
```bash
cd Wiki-API
```
3. Install the dependencies:
```bash
npm install
```

## Usage
1. Start the MongoDB server:
```bash
mongod
```
2. Start the Express server - Runs on http://localhost:3000:
```bash
npm start
```


3. Use an API testing tool (e.g., Postman, cURL) to interact with the API using the available routes:
- Retrieve all articles:
```bash
GET http://localhost:3000/articles
```
- Create a new article:
```bash
POST http://localhost:3000/articles

Body:
{
  "title": "Article Title",
  "content": "Article Content"
}

```
- Delete all articles:
```bash
DELETE http://localhost:3000/articles
```
- Retrieve a specific article:
```bash
GET http://localhost:3000/articles/article-title
```
- Update a specific article:
```bash
PUT http://localhost:3000/articles/article-title

Body:
{
  "title": "New Title",
  "content": "New Content"
}
```
- Partially update a specific article:
```bash
PATCH http://localhost:3000/articles/article-title

Body:
{
  "content": "Updated Content"
}
```
- Delete a specific article:
```bash
DELETE http://localhost:3000/articles/article-title
```

## Contributing

Contributions to this API are always welcome. If you have any suggestions, bug reports, or feature requests, please create an issue on the [GitHub repository](https://github.com/tristantanjh/KeeperApp) or submit a pull request.

## Acknowledgments

- Angela Yu for her comprehensive web development bootcamp course, which served as the foundation for this project.







