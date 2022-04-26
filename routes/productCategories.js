var express = require("express");
var router = express.Router();
var category = require("../controllers/category.controller");
var validationRule = require("../validations/productCategories");

router.post("/category", validationRule.validate("create"), category.create);
router.get("/category/list", category.list);
router.put("/category/update", validationRule.validate("create"), category.update);

module.exports = router;