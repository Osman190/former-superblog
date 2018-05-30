const Post = require('../models/post');

const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    Post.find(function(err, posts) {
        res.render('posts', {
            posts: posts
        });
    });
});

router.post('/', function(req, res) {
    var post = new Post();
    post.name = req.body.name;
    post.content = req.body.content;
    post.order = req.body.order;

    post.save(function(err) {
        if (err) res.send(err);
        console.log('Post Created', post);
        res.redirect('/posts');
    });
});

module.exports = router;
