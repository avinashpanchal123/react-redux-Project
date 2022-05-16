import axios from "axios"

import {
    ALL_PRODUCTS_FAIL,
    ALL_PRODUCTS_SUCCESS,
    ALL_PRODUCTS_REQUEST,
    PRODUCT_DETAILS_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    CLEAR_ERRORS
} from "../constants/productsConstants"


export const getProducts = () => async(dispatch)=>{
    try{
        dispatch({type : ALL_PRODUCTS_REQUEST});

        const {data} = await axios.get("/products");

        // console.log(data);
        dispatch({
            type: ALL_PRODUCTS_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type: ALL_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}


export const getProductDetails = (id) => async(dispatch)=>{
    try{
        dispatch({type : PRODUCT_DETAILS_REQUEST});

        const {data} = await axios.get(`/products/${id}`);

        console.log(data);
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload : data
        })
    }
    catch(error){
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.response.data.message
        })
    }
}

export const clearErrors =  () => async(dispatch)=>{
    dispatch({
        type:CLEAR_ERRORS
    })
}