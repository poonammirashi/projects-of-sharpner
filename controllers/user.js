const user = require('../models/user');

exports.addUser =  async (req,res,next) => {
    try {
        const name = req.body.name;
        const phonenumber= req.body.phonenumber;
        const email = req.body.email;

        const data = await user.create({ name , phonenumber, email});
        res.json({newuser: data})
    }
    catch(err) {
        console.log(err);
    }
};

exports.getUser = async (req,res,next) => {
    try {
        const users =  await user.findAll();
        res.json({allusers: users})
    }
    catch(err) {
        console.log(err);
    }
}

exports.deleteUser = async (req,res,next) => {
    try {
        const userid= req.params.id;
        const deleted= await user.destroy({where: {id:userid}});
        res.json({deleted})
    }
    catch(err) {
        console.log(err);
    }
}