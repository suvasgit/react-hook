import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Datafetch=()=> {
    const [posts,setPost]=useState([])
    // [posts,setPost] it means array destructuring
    // post is a variablename
    // setPOst is a function implements the osts variable
    // [] in useState means empty array is the posts variable has empty array initial value

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <>
            
        </>
    )
}

export default Datafetch
