const CategoryModel = require("../models/categoryModel")

const getCategories = ( req, res ) => {
    CategoryModel.find()
    .then(result => {
        const categories = result;
        const test = "test";
        res.render("index", {
            test: test,
            categories: categories
        })
    })
    .catch(err => {
        res.render("index", {err: err})
    })
}

const addCategory = ( req, res ) => {
    let category = new CategoryModel();
    category.name = req.body.name;
    category.save()
    .then(result => {
        res.json("success")
    })
    .catch(err => {
        res.json("fail")
    })
}

const editCategory = async ( req, res ) => {
    let category = await CategoryModel.findById(req.body.id);
    category.name = req.body.name;
    category.save()
    .then(result => {
        res.json("success")
    })
    .catch(err => {
        res.json("fail")
    })
}

module.exports = {
    getCategories,
    addCategory,
    editCategory
};