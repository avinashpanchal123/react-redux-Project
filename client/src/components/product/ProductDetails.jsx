import React, { useEffect } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getProductDetails } from '../../redux/actions/productAction';
import { useParams } from "react-router-dom";


function ProductDetails() {

    const dispatch  = useDispatch();

    const { id } = useParams();

    useEffect(()=>{
       dispatch(getProductDetails(id))
    })
  return (
    <>
    </>
  )
}

export default ProductDetails