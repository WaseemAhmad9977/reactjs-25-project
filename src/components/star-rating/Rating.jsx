import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import './rating.css'

const Rating = ({noOfStars=10}) => {

    const [rating,setRating] = useState(0)
    const [hover,setHover] = useState(0)


    function handMouseClick(getCurrentIndex){
        console.log(getCurrentIndex)
        setRating(getCurrentIndex)
    }

    
    function handleMouseHover(getCurrentIndex){
        console.log(getCurrentIndex)
        setHover(getCurrentIndex)
    }

    
    function handleMouseLeave(){
        // console.log(getCurrentIndex)
        setHover(rating)
    }
  return (
    <div className='wrapper'>
        {[...Array(noOfStars)].map((_,index)=>{
          
        index+=1;
        //   return <FaStar />

          return <FaStar 

         size={50}
          key={index}
          className={(index <= (hover||rating)) ? 'active' : 'Inactive'}
          onClick={()=>handMouseClick(index)}
          onMouseOver={()=>handleMouseHover(index)}
          onMouseLeave={()=>handleMouseLeave(index)}
          
          
          />

        })}
    </div>
  )
}

export default Rating

