import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productmodels.js";

//Fetch all products, API: GET /api/products
const getProducts = asyncHandler(async(req, res) => {
  const products = await Product.find({});
  res.json(products);
});

//Fetch all product, API: GET /api/products/:id
const getProductsById = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id);

  if(product){
    return res.json(product);
  }
  else{
    res.status(404);
    throw new Error('Resource not Found');
  }
})

export {getProducts, getProductsById};