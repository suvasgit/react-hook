import React, { useState } from 'react'

const Increment=()=> {
    const [count,setCount]=useState(0)
    function increase(){
        setCount(count+1)
    }
    return (
        <>
           <h1>{count}</h1> 
           <button onClick={()=>count <50 && setCount(count+1)}>Click to Increase</button>
           <button onClick={()=>count >0 && setCount(count-1)}>Click to Decrease</button>
        </>
    )
}

export default Increment
