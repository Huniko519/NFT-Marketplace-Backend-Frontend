const userModel = require("../models/usersModel");

const login = async (req, res) => {
    let user = await userModel.findOne({ address: req.body.address });
    if (user == undefined) {
        user = new userModel();
    }
    user.address = req.body.address;
    user.signature = req.body.signature;
    user.save();
    res.json({ token: req.body.signature });
}

const user = (req, res) => {
    let address = { $regex: req.params.id, $options: 'i' }
    userModel.findOne({ address: address })
        .then(result => {
            res.json({ user: result });
        })
        .catch(err => {
            console.log(err)
        })
}

const update = async (req, res) => {

    let address = { $regex: req.body.address, $options: 'i' }
    let user = await userModel.findOne({ address: address });
    if (user !== null) {
        user.name = req.body.name;
        user.description = req.body.description;
        user.avatar = req.body.avatar;
        user.twitter = req.body.twitter;
        user.telegram = req.body.telegram;
        user.instagram = req.body.instagram;
        user.save();
    } else {
        user = new userModel();
        user.signature = req.body.address;
        user.address = req.body.address;
        user.address = req.body.address;
        user.name = req.body.name;
        user.description = req.body.description;
        user.avatar = req.body.avatar;
        user.twitter = req.body.twitter;
        user.telegram = req.body.telegram;
        user.instagram = req.body.instagram;
        console.log(req.body, user, 888999);
        user.save();
    }
    res.json("success");
}

module.exports = {
    login,
    user,
    update
};