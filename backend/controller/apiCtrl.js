const Category = require("../models/categoryModel");
const collectionModel = require("../models/collectionModel");
const itemModel = require("../models/itemModel");
const User = require("../models/usersModel");
const ItemBuy = require("../models/itemBuyModel");
const githubTrendsApi = require("github-trends-api");
const axios = require('axios');

const Post_GitData = async (req, res) => {
    console.log(req.body.data, 8998);
    // const api = 'https://api.traitsniper.com/api/projects/metroverse/nfts?page=0&min_price=&max_price=&sort_price=&sort_last_sale_timestamp=&min_rank=&max_rank=&token_id=&token=&trait_values=&unrevealed=false&limit=50&trait_count=true&trait_norm=true'
    // axios.get(api)
    //     .then(result => {
    //         console.log(result, 9988);
    //         res.json(result)
    //     })
    //     .catch(error => { console.log(error) })

    // githubTrendsApi(
    //     { section: req.query.section, since: req.query.since }
    // )
}

const Get_GitData = async (req, res) => {
    console.log(34567890);
    // const api = 'https://api.traitsniper.com/api/projects/metroverse/nfts?page=0&min_price=&max_price=&sort_price=&sort_last_sale_timestamp=&min_rank=&max_rank=&token_id=&token=&trait_values=&unrevealed=false&limit=50&trait_count=true&trait_norm=true'
    // console.log(api);
    // axios.get(api)
    //     .then(result => {
    //         console.log(result.body, 9988);
    //         res.json(result.data)
    //     })
    //     .catch(error => { console.log(error) })

    // githubTrendsApi(
    //     { section: req.query.section, since: req.query.since }
    // )
}

const change_status = async (req, res) => {
    itemModel.updateOne({ _id: req.body._id }, { status: req.body.status })
        .then(result => {
            console.log(result);
            res.json('success');
        })
        .catch(err => {
            console.log(err);

        })
}

const change_owner = async (req, res) => {
    itemModel.updateOne({ _id: req.body._id }, { owner: req.body.owner, status: false })
        .then(result => {
            res.json('success');
        })
        .catch(err => {
            console.log(err);

        })
}

const saveCollection = (req, res) => {
    let collection = new collectionModel({
        ...req.body
    });
    collection.save();
    res.json("success");
}

const collections = async (req, res) => {
    const account = req.query.account;
    const limit = req.query.limit;
    let query = {};
    if (account != undefined) {
        query.owner = { $regex: account, $options: 'i' }
    }
    collectionModel.find(query).limit(Number(limit))
        .then(result => {
            res.json({ collections: result });
        })
        .catch(err => {
            console.log(err)
        });
}

const items = async (req, res) => {
    let query = {};
    let condition = {};
    let mysort = {};
    let sort = "";
    if (req.query.owner != undefined && req.query.owner != '') {
        query.owner = req.query.owner;
        query.owner = { $regex: query.owner, $options: 'i' }
    }
    if (req.query.status) {
        query.status = req.query.status;
    }
    if (req.query.category) {
        query.category = req.query.category;
    }
    condition.length = req.query.limit * 1;
    condition.start = req.query.page * req.query.limit * 1;
    if (req.query.sortBy == 'mintedAt') {
        sort = 'createdAt';
    } else if (req.query.sortBy == 'views') {
        sort = 'views';
    } else if (req.query.sortBy == 'price') {
        sort = 'price';
    }
    if (req.query.sortDir == 'asc') {
        mysort[sort] = 1;
    } else {
        mysort[sort] = -1;
    }
    itemModel.find(query).limit(condition.length).skip(condition.start).sort(mysort)
        .then(result => {
            res.json({ items: result });
        })
        .catch(err => {
            console.log(err);

        })
}

const saveItem = (req, res) => {
    let item = new itemModel({
        ...req.body
    });
    item.save();
    res.json("success");
}

const update_price = (req, res) => {
    itemModel.updateOne({ collectionId: req.body.collectionId, tokenId: req.body.tokenId }, { price: req.body.price })
        .then(result => {
            res.json('success');
        })
        .catch(err => {
            console.log(err);

        })
}

const viewItem = (req, res) => {
    itemModel.findOne({ collectionId: req.query.collection_id, tokenId: req.query.id })
        .then(async result => {
            let creatorObj = await User.findOne({ address: result.creator.toLowerCase() });
            let ownerObj = await User.findOne({ address: result.owner.toLowerCase() });
            let data = {
                _id: result._id,
                category: result.category,
                tokenId: result.tokenId,
                pairKey: result.pairKey,
                collectionId: result.collectionId,
                name: result.name,
                price: result.price,
                assetType: result.assetType,
                auction: result.auction,
                metadata: result.metadata,
                image: result.image,
                creator: result.creator,
                owner: result.owner,
                currency: result.currency,
                royalties: result.royalties,
                description: result.description,
                txHash: result.txHash,
                status: result.status,
                createdAt: result.createdAt,
                updatedAt: result.updatedAt,
                creatorObj: creatorObj,
                ownerObj: ownerObj,
                sellingStatus: result.sellingStatus,
            };
            res.json({ item: data });
        })
        .catch(err => {
            console.log(err)
        })
}

const getCategories = (req, res) => {
    Category.find()
        .then(result => {
            res.json({ categories: result })
        })
        .catch(err => {
            res.json("fail")
        })
}

const setAddCategories = (req, res) => {
    let item = new Category({
        ...req.body
    });
    item.save();
    res.json(item);
}

const setRemoveCategories = (req, res) => {
    Category.deleteOne({ _id: req.body.id })
        .then(result => {
            if (result) {
                res.json('delete')
            }
        })
        .catch(err => {
            res.json(err)
        })
}

const setNftSelling = async (req, res) => {
    let item = await itemModel.findById(req.body.id);
    item.sellingStatus = req.body.sellingStatus;
    item.save();
    res.json("success");
}

const setNftBuy = async (req, res) => {
    let itemBuy = await new ItemBuy();
    itemBuy.itemId = req.body.id;
    itemBuy.buyer = req.body.buyer;
    itemBuy.status = req.body.status;
    itemBuy.save();
    res.json("success");
}

module.exports = {
    saveCollection,
    collections,
    saveItem,
    update_price,
    viewItem,
    items,
    setAddCategories,
    setRemoveCategories,
    getCategories,
    setNftSelling,
    setNftBuy,
    change_status,
    change_owner,
    Get_GitData,
    Post_GitData
};