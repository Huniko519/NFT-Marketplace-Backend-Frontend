const mongoose = require('mongoose');

const CollectionSchema = mongoose.Schema({
    address: {
        type: String,
    },
    name: {
        type: String,
    },
    symbol: {
        type: String,
    },
    description: {
        type: String,
    },
    image: {
        type: String,
    },
    creator: {
        type: String,
    },
    owner: {
        type: String,
    },
    txHash: {
        type: String,
    },
    status: {
        type: String,
    },
    date: {
        type: String,
    },
},
{
  timestamps: true
});

const Collection = mongoose.model('Collection', CollectionSchema)

module.exports = Collection;
