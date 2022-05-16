import React from 'react'
import { Link } from 'react-router-dom'
import StarRatings from 'react-star-ratings';

const options = {
    rating :3.5,
    starRatedColor :"tomato",
    numberOfStars : 5,
    name:'rating',
    edit: false,
    starDimension: "18px",
    starSpacing: "2px"
}

function Product({product}) {
  return (
    <>
    <Link className='productCard' to={`/${product._id}`} >
        <img src={product.images[0].url} alt={product.title} />
        <p>{product.title}</p>
        <div>
        <StarRatings
         {...options}
        />
      &nbsp; &nbsp; &nbsp;  <span>230 Reviews</span>
        </div>
        <span>{product.price}</span>
    </Link>
    </>
  )
}

export default Product