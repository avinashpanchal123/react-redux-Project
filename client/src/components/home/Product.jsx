import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings';



function Product({product}) {

  const options = {
    rating :product.ratings,
    starRatedColor :"tomato",
    numberOfStars : 5,
    name:'rating',
    edit: false,
    starDimension: "18px",
    starSpacing: "2px"
}
  return (
    <>
    <Link className='productCard' to={`/products/${product._id}`} >
        <img src={product.images[0].url} alt={product.title} />
        <p>{product.title}</p>
        <div>
        <StarRatings
         {...options}
        />
      &nbsp; &nbsp; &nbsp;  <span>( {product.numOfReviews} Reviews )</span>
        </div>
        <span>{`₹ ${"  "}${product.price}`}</span>
    </Link>
    </>
  )
}

export default Product