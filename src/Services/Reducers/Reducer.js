import React from 'react';

const initialState={
    cardData:[]
}
const cardItem = (state=initialState,action) => {
    switch(action.type){
        case "ADD_TO_CARD": 
        return{
            ...state,
            cardData:action.data
        }
        break;
        default:
            return state
    }
};

export default cardItem;