import React,{useState,useEffect, Fragment} from 'react'
import axios from 'axios'

const Albums=()=> {
    const [albums,setPost]=useState([])
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(res=>{
            console.log(res)
            setPost(res.data);
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <>
        {albums.map(a=>{
        return (
            <Fragment>
            <li>{a.title}</li>
            </Fragment>
        )

})}
        </>
    )
}

export default Albums
