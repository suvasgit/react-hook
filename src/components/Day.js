import React from 'react'

const Day=()=> {
    return (
        <>
             <div className="container">
         <div className="row row-cols-1 row-cols-md-4 g-4 mt-2 mb-3" >
  <div className="col">
    <div className="card shadow-lg">
      <figure>
      <img src="images/t6.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">LED 51" TV</h5>
        <p>This is world wide popular Television.</p>
        <button className="btn btn-primary">Add to Cart</button>
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
        <p>This is most demanded in Photography field.</p>
        <button className="btn btn-primary">Add to Cart</button>
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
        <p>This is the one of the most popular Oven.</p>
        <button className="btn btn-primary">Add to Cart</button>
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
        <p>This is cheap & the best Mobile for using internet.</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>

  </div>
</div>    
        </>
    )
}

export default Day
