import React, { useEffect, useState } from "react";
import './style.css'

const UseEffect =() => {
    //  const intialData = 10
     const [myNum, setMyNum]= useState(10)

      useEffect(() => {
        document.title = `Chats(${myNum})`;
      },[]);

    return (
        <>
            <div className='center_div'>
               <p>{myNum}</p>
               <div className='button2' onClick={() => setMyNum(myNum + 1)}>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
                INCR
            </div>
            <div className='button2'  onClick={() => myNum > 0 ? setMyNum(myNum - 1) : 0}>
               <span></span>
               <span></span>
               <span></span>
               <span></span>
                DECR
            </div>
            </div>
        </>
    )

}

export default UseEffect