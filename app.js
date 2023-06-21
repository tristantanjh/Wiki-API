// Importing required dependencies (Express, body-parser, ejs, and mongoose).
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

// Initializing the Express application.
const app = express();

// Setting the view engine to EJS, which allows rendering dynamic templates.
app.set('view engine', 'ejs');

// Connecting to the MongoDB database with the name "WikiDB" running locally on the default port.
mongoose.connect("mongodb://127.0.0.1:27017/WikiDB");

// Adding middleware to parse URL-encoded bodies.
app.use(bodyParser.urlencoded({
  extended: true
}));
// Serving static files from the "public" directory.
app.use(express.static("public"));

// Defining the Mongoose schema for an article.
const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title must be included"]
      },
      content: String
});

// Creating a Mongoose model named "Article" based on the defined schema.
const Article = mongoose.model("Article", articleSchema);

app.route("/articles")
    .get((req, res) => {
        // Retrieve all articles from the database
        Article.find()
            .then((articles) => {
                // Send the articles as the response
                res.send(articles);
            })
            .catch((err) => res.send("Error: " + err));
    })
    .post((req, res) => {
        // Create a new article with data from the request body
        const newArticle = new Article({
            title: req.body.title,
            content: req.body.content
        });
        // Save the new article to the database
        newArticle.save()
            .then(() => res.send("Successfully saved article."))
            .catch((err) => res.send("Error: " + err));
    })
    .delete((req, res) => {
        // Delete all articles from the database
        Article.deleteMany()
            .then(() => res.send("Successfully deleted all articles."))
            .catch((err) => res.send("Error: " + err));
    });

app.route("/articles/:articleTitle")
    .get((req, res) => {
        // Find the article with the given title in the database
        Article.findOne({title: req.params.articleTitle})
            .then((article) => {
                if (article) {
                    // Send the article as the response if found
                    res.send(article);
                } else {
                    // Send a message if no article with the given title is found
                    res.send("No article with that title found.");
                }
            })
            .catch((err) => res.send("Error: " + err));
    })
    .put((req, res) => {
        // Replace the article with the given title with the new title and content from the request body
        Article.replaceOne({title: req.params.articleTitle}, 
            {title: req.body.title, content: req.body.content})
            .then(() => res.send("Article successfully replaced."))
            .catch((err) => res.send("Error: " + err));
    })
    .patch((req, res) => {
        // Update the article with the given title with the new data from the request body
        Article.updateOne({title: req.params.articleTitle}, 
            {$set: req.body})
            .then(() => res.send("Article successfully updated."))
            .catch((err) => res.send("Error: " + err));
    })
    .delete((req, res) => {
        // Delete the article with the given title from the database
        Article.deleteOne({title: req.params.articleTitle})
            .then(() => res.send("Successfully deleted article."))
            .catch((err) => res.send("Error: " + err));
    });

// Starts the Express server and listens on port 3000.
app.listen(3000, function() {
  console.log("Server started on port 3000");
});