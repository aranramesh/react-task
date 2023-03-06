import React from 'react'

const Reducer = (state,action) => {
     if(action.type == "Ramesh"){
        return{
            addValue:action.payload
        }
     }
}

export default Reducer
