const { responseData } = require("../helpers/responseData");
const db = require("../models");
const ProductCategory = db.product_categories;
module.exports = {
    create: async (req, res) => {
        try {
            await ProductCategory.create({
                name : req.body.name
            });
            return res.json(responseData("CATEORY_CREATE",{},200,req));
        } catch (err) {
            return res.status(422).json(responseData(err.message, {}, 422, req));
        }
    },
    list: async (req, res) => {
        try {
            let data = await ProductCategory.findAll({where: {status: 'active'}});
            return res.json(responseData("CATEORY_LIST",data,200,req));
        } catch (err) {
            return res.status(422).json(responseData(err.message, {}, 422, req));
        }
    },
    update: async (req, res) => {
        try {
            await ProductCategory.update({name : req.body.name}, {
                where: { id: req.query.id }
            })
            return res.json(responseData("CATEORY_UPDATE",{},200,req));
        } catch (err) {
            return res.status(422).json(responseData(err.message, {}, 422, req));
        }
    },
};