const express = require('express');

const expenseController = require('../controllers/expense');

const router = express.Router();

router.post('/add-expense', expenseController.addExpense);

router.get('/get-expenses', expenseController.getExpenses);

router.get('/get-expense/:id', expenseController.getExpense);

router.post('/edit-expense/:id', expenseController.editExpense);

router.delete('/delete-expense/:id', expenseController.deleteExpense);

module.exports = router;