const productModel = require("../models/product.model")
class ProductCtrl{
  
  static createProduct(req,res){
    const product = req.body;
   
const prodDoc = new 
productModel(product);

prodDoc
.save()
.then((result)=> {
    res.status(200).send({data:result,message:("product Created")});
})
.catch((err)=> {
    console.log(err);
    res
    .status(500)
    .send({error:err,message:("Could not created the product")});

});

}
    //get all the product 
    static getAllProducts(req, res) {
        productModel.find({})
        .then((result) => {
        res.status(200).send({ data: result, message: "Product list" });
      })
      .catch((err) => {
        res.status(404).send({ error: err, message: "Product not available" });
      });
    } 
    //get the single product 
    static getOneProduct(req, res) {
        const  { productSKU } = req.params;
        productModel.findOne({ productSKU: productSKU})
        .then((result) => {
            res.status(200).send({ data: result, message: "Single Product Details "});
        })
        .catch((err) => {
            res.status(404).send({ error: err, message:"Single Product not available"});
        })        
    }   
    //delete the single product 
    static deleteProduct(req, res) {
        const { productSKU } = req.params;
        productModel.findOneAndDelete({ productSKU: productSKU}, (err) => {
            
          if (err) {
            res.status(404).send({ error: err, message: " Product Could not deleted"});
          } else {
            res.status(200).send({ data: null, message: " Product is Deleted"});
          }
        });
    } 
}
module.exports =ProductCtrl;




