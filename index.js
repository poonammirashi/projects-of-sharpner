const bodyParser = require('body-parser')

const express = require('express');

const cors = require('cors');

const app = express();
const routes= require('./routes/product');

const sequelize = require('./database');

app.use(cors());
app.use(bodyParser.json({extended: false}))

app.use(routes);

sequelize 
.sync()
.then(result => {
    app.listen(3000)
})
.catch(err => console.log(err)
);