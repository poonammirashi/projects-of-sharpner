const Expense = require('../models/expense');

exports.addExpense = async (req,res, next) => {
    try {
        const amount = req.body.amount;
        const description = req.body.description;
        const category = req.body.category;
        
        const data = await Expense.create({amount, description, category});
        res.status(200).json({newExpense: data});
    }
    catch(err) {
        console.log(err);
        res.status(500).json({err:err});
    }
}

exports.getExpenses = async (req,res,next) => {
    try {
        const expenses = await Expense.findAll();
        res.status(200).json({expenses});
    }
    catch(err) {
        res.status(500).json({err})
        console.log(err);
    }
}

exports.getExpense = async (req,res,next) => {
    try {
        const expense = await Expense.findByPk(req.params.id);
        res.status(200).json({expense});
    }
    catch(err) {
        res.status(500).json({err})
        console.log(err);
    }
}

exports.deleteExpense = async (req, res, next) => {
    try {
        const deletedExpense = await Expense.destroy({where: {id: req.params.id}})
        res.status(200).json({deletedExpense});
    }
    catch(err) {
        res.status(500).json({err});
        console.log(err);
    }
}
 
exports.editExpense = async (req, res, next) => {
    try{
        const expense = await Expense.findByPk(req.params.id);
        const updatedAmount = req.body.amount;
        const updatedDes = req.body.description;
        const updatedcategory = req.body.category;
        if(expense) {
            expense.amount = updatedAmount;
            expense.description = updatedDes;
            expense.category = updatedcategory;
            const editedExpense = await expense.save();
            console.log(updatedAmount);
            return res.status(200).json({editedExpense});
        }
    }
    catch (err) {
        console.log(err);
        res.json(500).json({err});
    }
}
