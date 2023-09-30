import { useState, useEffect } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Button, Form } from "react-bootstrap"
import Message from "../../components/Message"
import Loader from "../../components/Loader"
import FormContainer from "../../components/FormContainer"
import { useUpdateProductMutation, useGetProductDetailsQuery } from "../../slices/productApiSlice" 

const ProductEditPage = () => {
  const {id: productId} = useParams();

  const [name, setName] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [brand, setBrand] = useState('');
  const [category, setCategory] = useState('');
  const [countInStock, setCountInStock] = useState(0);
  const [description, setDescription] = useState('');

  const {data: product, isLoading, refetch, error} = useGetProductDetailsQuery(productId);
  
  console.log(product);

  return (
    <div>ProductEditPage</div>
  )
}

export default ProductEditPage

