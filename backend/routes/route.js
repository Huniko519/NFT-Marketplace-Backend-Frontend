const express = require('express');
const categoryCtrl = require('../controller/categoryCtrl.js');
const router = express.Router();

router.get('/category', categoryCtrl.getCategories);
router.post('/category/add', categoryCtrl.addCategory);
router.post('/category/edit', categoryCtrl.editCategory);

module.exports = router;