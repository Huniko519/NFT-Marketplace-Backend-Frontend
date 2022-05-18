const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    address: {
        type: String,
    },
    signature: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    avatar: {
        type: String,
    },
    twitter: {
        type: String,
    },
    telegram: {
        type: String,
    },
    instagram: {
        type: String,
    },
},
{
  timestamps: true
});

const User = mongoose.model('User', UserSchema)

module.exports = User;
