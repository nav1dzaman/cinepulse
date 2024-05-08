import React from 'react'

function movieReducer(state,action) {
    const {type,payload}=action;

    switch(type){
       case "ADD_TO_LIST":
           return {...state,movieList:payload.movie}
       case "REMOVE_FROM_LIST":
           return {...state,movieList:payload.movie}
       case "ADD_TO_WATCHLIST":
           return {...state,watchList:payload.movie}
       case "REMOVE_FROM_WATCHLIST":
           return {...state,watchList:payload.movie}
       case "RESTORE_STATE":
           return payload;
        default:
           throw new Error("Noc ase Found")
    }
}

export default movieReducer