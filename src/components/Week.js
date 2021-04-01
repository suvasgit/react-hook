import React from 'react'

const Week=()=> {
    return (
        <>
            <div className="container">
         <div className="row row-cols-1 row-cols-md-4 g-4 mt-2 mb-3" >
  <div className="col">
    <div className="card shadow-lg">
      <figure>
      <img src="images/t1.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Gaming Laptop</h5>
        <p>This is the one of the most popular.</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
  
  <div className="col">
    <div className="card shadow-lg">
    <figure>
      <img src="images/t8.jpg" className="card-img-top" alt="..." style={{heigt:'200px'}}/>
      </figure>
      <div className="card-body">
        <h5 className="card-title">Jacket</h5>
        <p>This is best quality Jacket that worlds people's refer.</p>
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
        <p>This is the one of the most popular.</p>
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
        <p>This is cheap & the best Mobile.</p>
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>

  </div>
</div>     
        </>
    )
}

export default Week
