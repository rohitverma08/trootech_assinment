var express = require("express");
var router = express.Router();
var products = require("../controllers/products.controller");
var validationRule = require("../validations/products");

router.post("/product", validationRule.validate("create"), products.create);
router.get("/product/list", products.list);
router.put("/product/update", validationRule.validate("create"), products.update);
router.get("/product/details", products.details);
router.delete("/product/delete", products.delete);

module.exports = router;