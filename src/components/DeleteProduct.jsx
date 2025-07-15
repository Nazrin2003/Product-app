import React from 'react'

const DeleteProduct = () => {
  return (
    <div>
        <center><h1 px-5 py-5>Delete Product</h1></center>
        <div className="container">
            <div className="row g-4 px-5 py-5">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Item Name</label>
                    <input type="text" className="form-control" />
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-warning">Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DeleteProduct