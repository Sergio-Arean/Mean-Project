//will host the express app
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post')

const app = express(); //this returns an express app

mongoose.connect('mongodb+srv://sergioarean:8QrjiOq5RSit2Ue7@cluster0.13ei8ot.mongodb.net/')
    .then(() => {
        console.log('Connected to database!');
    })
    .catch((err) => {
        console.log('Connection failed :/',err.message);
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//handling CORS ERROR:
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers",
        "Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS");
    next();
});


app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });

    post.save();
    res.status(201).json({
        message: 'Post added successfully'
    });
});


app.get('/api/posts', (req, res, next) => {
    Post.find().then(documents => {
        res.status(200).json({
            message: 'Post fetched ok!',
            posts: documents
        });
    });
});

module.exports = app; //we export the entire app