import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'

const Albums = () => {
    const [albums, setPost] = useState([])
    const [limit, setLimit] = useState(15)
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/albums')
            .then(res => {
                console.log(res)
                setPost(res.data);
            })
            .catch(err => console.log(err))
    }, [])

    return (
        <>
            {albums.slice(0, limit).map(a => {
                return (
                    <Fragment key={a.id}>
                        <li>{a.title}</li>
                    </Fragment>
                )

            })}
            {limit < albums.length && <button onClick={() => setLimit(limit + 15)}>Load More</button>}
            {limit > 15 && <button onClick={() => setLimit(limit - 15)}>Show Less</button>}
        </>
    )
}

export default Albums
