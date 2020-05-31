import {ADD_PRODUCT_BASKET} from './types'

export const addBasket =(product)=>{
    return (dispatch) =>{
        console.log("add item to basket");
        console.log(product);
        dispatch({
            type:ADD_PRODUCT_BASKET,
            payload:product
        })
    }
}