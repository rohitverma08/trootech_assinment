const { body } = require("express-validator");
const { validatorMiddleware } = require("../helpers/helpers");

module.exports.validate = (method) => {
    switch (method) {
        case "create": {
            return [
                body("name", "Please enter prouct name.")
                    .notEmpty()
                    .withMessage("NAME_EMPTY")
                    .isLength({ min: 3, max: 20 })
                    .withMessage("FIRST_NAME_LENGTH"),
                validatorMiddleware,
            ];
        }
    }
};