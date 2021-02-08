import React from "react";
import './App.css'

function Tweet({name,age}){
    return(
        <div className='twwet'>
            <h3>{name}</h3>
            <p>age is :{age}</p>
      
        </div>
    )
}

export default Tweet;