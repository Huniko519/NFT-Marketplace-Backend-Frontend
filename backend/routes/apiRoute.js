const express = require('express');
const apiCtrl = require('../controller/apiCtrl.js');
const userCtrl = require('../controller/userCtrl.js');
const router = express.Router();

router.post("/login", userCtrl.login);
router.get("/user/:id", userCtrl.user);
router.post("/user/update", userCtrl.update);

router.post("/save_collection", apiCtrl.saveCollection);
router.get("/collections", apiCtrl.collections);

router.post("/save_item", apiCtrl.saveItem);
router.post("/update_price", apiCtrl.update_price);
router.get("/item", apiCtrl.items);
router.get("/view_item", apiCtrl.viewItem);

router.get("/categories", apiCtrl.getCategories);
router.post("/add_categories", apiCtrl.setAddCategories);
router.post("/remove_categories", apiCtrl.setRemoveCategories);

// marketplace
router.post("/setNftSelling", apiCtrl.setNftSelling);
router.post("/setNftBuy", apiCtrl.setNftBuy);

// change status
router.post('/change_status', apiCtrl.change_status);
router.post('/change_owner', apiCtrl.change_owner);

// Git data 
router.get("/Git", apiCtrl.Get_GitData);
router.post("/Git", apiCtrl.Post_GitData);

module.exports = router;