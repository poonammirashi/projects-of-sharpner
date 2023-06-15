const Product = require('../model/product')

exports.getProducts = (req,res,next) => {
    Product.findAll()
    .then(products => {
        res.status(200).json({products})
    })
    .catch(err => {
        console.log(err);
    })
}

exports.getProduct = (req,res,next) => {
    Product.findByPk(req.body.id)
    .then(product => {
        res.status(200).json({product});
    }).catch(err => {
        console.log(err);
    });
};

exports.postAddProduct = (req,res,next) => {
    let price = req.body.price;
    let name = req.body.name;

    Product.create({price,name})
    .then(product => {
        res.status(200).json({newproduct: product})
    })
    .catch(err => {
        console.log(err);
    });
};

exports.postDeleteProduct = (req,res,next) => {
    Product.destroy({where: {id: req.params.id}})
    .then(product => {
        // product.destroy();
        res.status(200).json({deletedProduct: product});
    })
    .catch(err => {
        console.log(err);
    })
}