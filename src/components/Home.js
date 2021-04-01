import React from 'react'
import Carosuel from './Carosuel'
import Footer from './Footer'
import Navbar from './Navbar'
import Products from './Products'
import Trending from './Trending'


function Home() {
    return(
        <>
        <Navbar/>
        <Carosuel/>
        <Products/>
        <Trending/>
        <Footer/>
        </>
    )
}
export default Home
