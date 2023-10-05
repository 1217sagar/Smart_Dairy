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

//Create a products, API: POST /api/products, access: Private/admin
const createProduct = asyncHandler(async(req, res) => {
  const product = new Product({
    name: 'Sample name',
    price: 0,
    user: req.user._id,
    image: '/images/sample.jpg',
    brand: 'Sample Brand',
    category: 'Sample Category',
    countInStock: 0,
    numReviews: 0,
    description: 'Sample Description'
  })

  const createdProduct = await product.save();

  res.status(201).json(createProduct);
});

//Update a product, API: PUT /api/products/:id, access: Private/admin
const updateProduct = asyncHandler(async(req, res) => {
  const {name, price, description, image, brand, category, countInStock}
    = req.body;

  const product = await Product.findById(req.params.id);

  if(product){
    product.name = name;
    product.price = price;
    product.image = image;
    product.brand = brand;
    product.category = category;
    product.countInStock = countInStock;
    product.description = description

    const updatedProduct = await product.save();
    res.json(updatedProduct);
  }
  else{
    res.status(404);
    throw new Error('Resource not found');
  }
})

//Delete a product, API: DELETE /api/products/:id, access: Private/admin
const deleteProduct = asyncHandler(async(req, res) => {
  const product = await Product.findById(req.params.id);

  if(product){
    await Product.deleteOne({_id: product._id});
    res.status(200).json({message: 'Product Deleted'}); 
  }
  else{
    res.status(404);
    throw new Error('Resource not found');
  }
})

export {getProducts, getProductsById, createProduct, updateProduct, deleteProduct};