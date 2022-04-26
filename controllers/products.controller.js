const product_service = require("../services/products.services");
const { responseData } = require("../helpers/responseData");

module.exports = {
    create: async (req, res) => {
        try {
            await product_service.create(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, 422, req));
        }
    },
    list: async (req, res) => {
        try {
            await product_service.list(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, 422, req));
        }
    },
    update: async (req, res) => {
        try {
            await product_service.update(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, 422, req));
        }
    },
    details: async (req, res) => {
        try {
            await product_service.details(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, 422, req));
        }
    },
    delete: async (req, res) => {
        try {
            await product_service.delete(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, 422, req));
        }
    },
};
