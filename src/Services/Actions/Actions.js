import {ADD_TO_CARD} from "..constants/constants" 
export const addToCart =(data)=>{
    return {
        type:ADD_TO_CARD,
        data:data
    }
}

export const removeToCart=(data)=>{
    return{
        type:"REMOVE_TO_CART",
        data:data
    }
}