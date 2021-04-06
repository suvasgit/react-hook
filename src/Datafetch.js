import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Datafetch = () => {
    const [posts, setPost] = useState([])
    const [limit, setLimit] = useState(15)
    // [posts,setPost] it means array destructuring
    // post is a variablename
    // setPOst is a function implements the posts variable
    // [] in useState means empty array is the posts variable has empty array initial value

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                setPost(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {posts.slice(0, limit).map(p => {
                return (
                    <Fragment key={p.id}>
                        <li>{p.title}</li>
                        <p>{p.body}</p>
                    </Fragment>
                )

            })}
            {limit < posts.length && <button onClick={() => setLimit(limit + 15)}>Load More</button>}
            {limit > 15 && <button onClick={() => setLimit(limit - 15)}>Show Less</button>}
        </>
    )
}

export default Datafetch
