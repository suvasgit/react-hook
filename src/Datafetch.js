import React,{useState,useEffect, Fragment} from 'react'
import axios from 'axios'

const Datafetch=()=> {
    const [posts,setPost]=useState([])
    // [posts,setPost] it means array destructuring
    // post is a variablename
    // setPOst is a function implements the posts variable
    // [] in useState means empty array is the posts variable has empty array initial value

    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(res=>{
            console.log(res)
            setPost(res.data);
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <>
        {posts.map(p=>{
        return (
            <Fragment>
            <li>{p.title}</li>
            <p>{p.body}</p>
            </Fragment>
        )

})}
        </>
    )
}

export default Datafetch
