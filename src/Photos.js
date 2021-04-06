import React,{useState,useEffect, Fragment} from 'react'
import axios from 'axios'

const Photos=()=> {
    const [photos,setPost]=useState([])
    const [limit,setLimit]=useState (15)
    useEffect(()=>{
        axios.get('https://jsonplaceholder.typicode.com/photos')
        .then(res=>{
            console.log(res)
            setPost(res.data);
        })
        .catch(err=>console.log(err))
    },[])

    return (
        <>
        {photos.slice(0,limit).map(b=>{
        return (
            <Fragment key={b.id}>
            <li>{b.title}</li>
            <p>{b.url}</p>
            </Fragment>
        )

})}
{limit < photos.length && <button onClick={() => setLimit(limit + 15)}>Load More</button>}
            {limit > 15 && <button onClick={() => setLimit(limit - 15)}>Show Less</button>}
        </>
    )
}

export default Photos
