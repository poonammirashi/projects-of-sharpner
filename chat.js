const express = require('express');

const bodyparser = require('body-parser');

const app = express();

const loginrouter = require('./routes/login');
const messagerouter = require('./routes/message');

app.use(bodyparser.urlencoded({ extended: false}));

app.use(loginrouter);
app.use(messagerouter);

app.listen(5000);