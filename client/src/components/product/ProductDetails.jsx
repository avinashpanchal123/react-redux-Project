import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getProductDetails } from '../../redux/actions/productAction';
import { useParams } from "react-router-dom";
import "./ProductDetails.css"
import Carousel from "react-material-ui-carousel";
import Loader from '../layout/loader/Loader';
import StarRatings from 'react-star-ratings';

function ProductDetails() {

    const dispatch  = useDispatch();

  
    const {loading, product} = useSelector( state => state.productDetails)
    // console.log(product, loading);
    const { id } = useParams();

    useEffect(()=>{
       dispatch(getProductDetails(id))
    }, [id, dispatch]);

    const options = {
      // rating :product.ratings,
      starRatedColor :"tomato",
      numberOfStars : 5,
      name:'rating',
      edit: false,
      starDimension: "18px",
      starSpacing: "2px"
  }
  return (
    <>
    {
      loading ? <Loader/>:
      <div className="productDetails">
      <div>
        {/* <Carousel>
          {
            product &&
            product.images.map((prodImg, i)=>{
              <img 
              className='carouselImg'
              key ={i}
              src={prodImg.url} 
              alt={`${i} slide`} />
            })
          }
        </Carousel> */}
        {
          product &&
          <img 
          className='carouselImg'
          src={product.images[0].url}
           alt={product.title} />
        }
      </div>

     {
       product &&
       <div>
       <div className="details_block1">
         <h2>{product.title}</h2>
         <p>Product # {product._id}</p>
       </div>
       <div className="details_block2">
       <StarRatings
   
        rating = {product.ratings}
        starRatedColor ="tomato"
        numberOfStars = {5}
        name='rating'
        edit = {false}
        starDimension = "18px"
        starSpacing = "2px"
   
        />
          &nbsp; &nbsp; &nbsp;  <span>( {product.numOfReviews} Reviews )</span>
       </div>
       <div className="details_block3">
         <h1>{`₹ ${"  "}${product.price}`}</h1>

         <div className="details_block3-1">
            <div>
            <button>-</button>
            <input type="Number"  value={1}/>
            <button>+</button>
            </div>
           <div>
           <button>Add to Cart</button>
           </div>
       </div>
     
       </div>
       <p className='stock_info'>
         Status :  &nbsp;
         <b className={product.stock < 1 ? "red_color":"green_color"}>
           {product.stock < 1 ? "OutOfStock":"InStock"}
         </b>
       </p>

       <div className="details_block-4">
         Description: <p>{product.description}</p>
       </div>

     </div>
     }
    </div>
    }
    </>
  )
}

export default ProductDetails