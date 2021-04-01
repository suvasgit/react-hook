import React from 'react'
import './Style.css';

function Products() {
    return (
        <>
           <div className="container">
         <div className="row row-cols-1 row-cols-md-4 g-5 mt-1 mb-3" >
  <div className="col">
    <div className="card shadow-lg">
      <figure>
      <img src="images/t1.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Gaming Laptop</h5>
        <p>This is the one of the most popular Gaming laptop for Game Lover.</p>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/t2.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Camera</h5>
        <p>This is the one of the most popular Camera in Pohotography field.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/t5.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Oven</h5>
        <p>This is the one of the most popular Oven that the all Top Chiefs used.</p>
      
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/t3.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Mobile</h5>
        <p>This is cheap & the best Mobile for using internet and playing games.</p>
      </div>
    </div>
  </div>

  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/t7.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Shoes</h5>
        <p>This is cheap and the best Shoes for Hip Pop.</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/t6.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">LED TV</h5>
        <p>This is one of the most Expensive Television.</p>
        
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/t7.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Shoes</h5>
        <p>This is most demanded Shoes in the world.</p>
       
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/t8.jpg" className="card-img-top" alt="..."style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Jacket</h5>
        <p>This is one of the most Popular Jacket of the worlds.</p>
        
      </div>
    </div>
  </div>
  </div>
</div>    
        </>
    )
}

export default Products
