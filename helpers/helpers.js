const { validationResult } = require("express-validator");
const { responseData } = require("./responseData");
const _ = require("lodash"); 
module.exports = {
  validatorMiddleware: (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res
        .status(200)
        .json(responseData(errors.errors[0].msg, {}, 422, req));
    } else {
      next();
    }
  },
};
