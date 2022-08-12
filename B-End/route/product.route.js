const router = require('express').Router();
const productCtrl = require("../controller/product.controller");




router.post("/",productCtrl.createProduct);
router.post("/:productSKU",productCtrl.deleteProduct);
router.get("/",productCtrl.getAllProducts);
router.get("/:productSKU",productCtrl.getOneProduct);




module.exports = router;



