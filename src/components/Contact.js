import React from 'react'
import Contactform from './Contactform'
import Footer from './Footer'
import Map from './Map'
import Navbar from './Navbar'

const Contact=()=> {
    return (
        <>
          <Navbar/>
          <div className="container mt-5 mb-3">
              <div className="row">
              <Contactform/>
              <Map/>
          </div>
          </div>
          <Footer/>  
        </>
    )
}

export default Contact
