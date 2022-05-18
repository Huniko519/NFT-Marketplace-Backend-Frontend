const mongoose = require('mongoose');

const ItemSchema = mongoose.Schema({
    category: {
        type: String,
    },
    tokenId: {
        type: String,
    },
    pairKey: {
        type: String,
    },
    collectionId: {
        type: String,
    },
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    assetType: {
        type: String,
    },
    auction: {
        type: String,
    },
    metadata: {
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
    currency: {
        type: String,
    },
    royalties: {
        type: String,
    },
    description: {
        type: String,
    },
    txHash: {
        type: String,
    },
    status: {
        type: String,
    },
    views: {
        type: Number
    },
    sellingStatus: {
        type: Number
    }
},
    {
        timestamps: true
    });

const Item = mongoose.model('item', ItemSchema)

module.exports = Item;
