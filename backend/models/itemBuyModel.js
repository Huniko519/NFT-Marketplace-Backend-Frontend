const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const ItemBuySchema = mongoose.Schema({
    itemId: {
        type: ObjectId,
        ref: 'item'
    },
    buyer: {
        type: String,
    },
    status: {
        type: Number
    }
},
{
  timestamps: true
});

const ItemBuy = mongoose.model('ItemBuy', ItemBuySchema)

module.exports = ItemBuy;
