const category_service = require("../services/category.services");
const { responseData } = require("../helpers/responseData");

module.exports = {
    create: async (req, res) => {
        try {
            await category_service.create(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, 422, req));
        }
    },
    list: async (req, res) => {
        try {
            await category_service.list(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, 422, req));
        }
    },
    update: async (req, res) => {
        try {
            await category_service.update(req, res);
        } catch (err) {
            var msg = err.message || "SOMETHING_WENT_WRONG";
            return res.status(422).json(responseData(msg, {}, 422, req));
        }
    },
};
