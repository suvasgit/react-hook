import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Products from './Products'

function Offer() {
    return (
        <>

        <Navbar/>

        <div className="container">
        <div className="col-m-12 shadow-lg text-center mt-3 mb-3 p-3"> 
        <h1>Todays Offer</h1>
        </div>
        </div>

        <Products/>
        <Footer/>
            
        </>
    )
}

export default Offer
