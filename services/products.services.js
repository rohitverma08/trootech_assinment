const { responseData } = require("../helpers/responseData");
const db = require("../models");
const Products = db.products;
const ProductCategory = db.product_categories;
module.exports = {
    create: async (req, res) => {
        try {
            console.log(req.body)
            await Products.create({
                name: req.body.name,
                category_id: req.body.category_id
            });
            return res.json(responseData("PRODUCT_CREATE", {}, 200, req));
        } catch (err) {
            return res.status(422).json(responseData(err.message, {}, 422, req));
        }
    },
    list: async (req, res) => {
        try {
            let data = await Products.findAll({
                include: {
                    model: ProductCategory,
                    attributes: ['id', 'name']
                }, where: { status: 'active' }
            });
            return res.json(responseData("PRODUCT_LIST", data, 200, req));
        } catch (err) {
            return res.status(422).json(responseData(err.message, {}, 422, req));
        }
    },
    update: async (req, res) => {
        try {
            await Products.update({ name: req.body.name, category_id: req.body.category_id }, {
                where: { id: req.query.id }
            })
            return res.json(responseData("PRODUCT_UPDATE", {}, 200, req));
        } catch (err) {
            return res.status(422).json(responseData(err.message, {}, 422, req));
        }
    },
    details: async (req, res) => {
        try {
            let data = await Products.findOne({
                include: {
                    model: ProductCategory,
                    attributes: ['id', 'name']
                }, where: { id: req.query.id }
            });
            return res.json(responseData("PRODUCT_DETAILS", data, 200, req));
        } catch (err) {
            return res.status(422).json(responseData(err.message, {}, 422, req));
        }
    },
    delete: async (req, res) => {
        try {
            await Products.destroy({
                where: {
                    id: req.query.id
                }
            });
            return res.json(responseData("PRODUCT_DELETE", {}, 200, req));
        } catch (err) {
            return res.status(422).json(responseData(err.message, {}, 422, req));
        }
    },
};