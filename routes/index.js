const express = require('express');
const router = express.Router();

router.get('/', function(req, res) {
    res.send('This is the post route');
    res.render('index', { title: 'Superblog' });
});

module.exports = router;
