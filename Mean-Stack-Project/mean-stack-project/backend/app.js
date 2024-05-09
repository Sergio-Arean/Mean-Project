//will host the express app
const express = require('express');

const app = express(); //this returns an express app

//handling CORS ERROR:
app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader("Access-Control-Allow-Headers",
    "Origin,X-Requested-With,Content-Type,Accept");
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, DELETE, OPTIONS");
    next();
  });

app.use('/api/posts',(req,res,next)=>{
    const posts = [
        {
            id: '1',
            title: 'the first title',
            content: 'the first content'
        },
        {
            id: '2',
            title: 'the second title',
            content: 'the second content'
        }
    ];
    res.status(200).json({
        message: 'Post fetched ok!',
        posts: posts
    });
});

module.exports = app; //we export the entire app