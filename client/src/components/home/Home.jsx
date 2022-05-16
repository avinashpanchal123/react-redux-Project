import React, { useEffect } from 'react'
import "./Home.css"
import Product from './Product';
import MouseOutlinedIcon from '@mui/icons-material/MouseOutlined';
import MetaData from '../layout/MetaData';
import { getProducts } from '../../redux/actions/productAction';
import {useSelector, useDispatch} from "react-redux"
const product = {
  _id : 123344,
  title : "first product",
  images : [
    {url:"https://rukminim1.flixcart.com/image/312/312/l0igvww0/t-shirt/o/i/b/m-m407-fs-camopocket-olive-lewel-original-imagca4kwtfkxzfg.jpeg?q=70"}
  ],
  price :"₹3000"
}
function Home() {

  const {loading, error, products} = useSelector( state => state.products)

  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getProducts())
  }, [dispatch])
  return (
    <>
    <MetaData title="ECOMMERCE"/>
    {
      loading ? "loading" :
      <>
      <div className="banner">
         <p>Welcome to Ecommerce</p>
         <h1>FIND AMAZING RPODUCTS BELOW</h1>
 
         <a href="#container">
             <button> 
                 Scroll <MouseOutlinedIcon
                 fontSize="small"
                 />
             </button>
         </a>
     </div>
     <h2 className="homeHeading">
       Featured Products
     </h2>
     <div className="container" id="container">
      {
        products && products.map(product =>
         <Product key={product._id} product={product}/>
         )
      }
     </div>
      </>
    }
    </>
  )
}

export default Home