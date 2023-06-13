const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const sequelize = require('./util/database');

const app = express();

const cors = require('cors');

app.use(cors());

app.set('view engine', 'ejs');
app.set('views', 'views');

const expenseRoutes = require('./routes/expense');

app.use(bodyParser.json({ extended: false }));

app.use(expenseRoutes);

app.use(errorController.get404);

sequelize
  .sync()
  .then(result => {
    // console.log(result);
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
