const express = require('express');

const app = express();

const fs = require('fs');
fs.writeFileSync("data.txt", "")

const router = express.Router();

router.get('/', (req, res, next) => {
    fs.readFile('data.txt',({encoding:'utf-8'}), (err, data) => {
        console.log(data);
        res.send(`${data}<form actoin='/' method='POST' 
    onsubmit="document.getElementById('username').value=localStorage.getItem('username')">
    <input type="text" name="message" placeholder="message">
    <input type="hidden" name="username" id="username">
    <button type="submit">send</button></form>`);
    })
});

router.post('/', (req, res, next) => {
    msg = ` ${req.body.username}:${req.body.message},`
    console.log(msg);
    fs.appendFileSync("data.txt", msg)
    res.redirect('/');
})

module.exports = router;