const express = require('express');

const app = express();

const data = require('./data');

const router = express.Router();

router.get('/login', (req,res,next) => {
    res.send(`<form actoin='/login' method='POST' 
    onsubmit="localStorage.setItem('username', document.getElementById('username').value) 
    console.log('pooo')">
    <input type="text" name="username" id="username">
    <button type="submit">login</button></form>`);
});

router.post('/login', (req,res,next) => {
res.redirect('/');
})

module.exports = router;