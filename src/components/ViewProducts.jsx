import React from 'react'
import Nav from './Nav'

const ViewProducts = () => {
    return (
        <div>
            <Nav/>
            <center><h1 px-5 py-5>View Products</h1></center>
            <div className="container">
                <div className="row g-4 px-4 py-4">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4 px-4 py-4">
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card h-100">
                                    <img src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Camera</h5>
                                            <p class="card-text"><strong>Price</strong> : 4000</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card"h-100>
                                    <img src="https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Sunglasses</h5>
                                            <p class="card-text"><strong>Price</strong> : 4000</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card"h-100>
                                    <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Shoes</h5>
                                            <p class="card-text"><strong>Price</strong> : 4000</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card"h-100>
                                    <img src="https://plus.unsplash.com/premium_photo-1677541205130-51e60e937318?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Lipstick</h5>
                                            <p class="card-text"><strong>Price</strong> : 200</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card"h-100>
                                    <img src="https://plus.unsplash.com/premium_photo-1718913936342-eaafff98834b?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div class="card-body">
                                            <h5 class="card-title">T-shirt</h5>
                                            <p class="card-text"><strong>Price</strong> : 200</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card"h-100>
                                    <img src="https://images.unsplash.com/photo-1620987278429-ab178d6eb547?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Candle</h5>
                                            <p class="card-text"><strong>Price</strong> : 90</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card"h-100>
                                    <img src="https://images.unsplash.com/photo-1556228578-567ba127e37f?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Spray</h5>
                                            <p class="card-text"><strong>Price</strong> : 150</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card"h-100>
                                    <img src="https://images.unsplash.com/photo-1525904097878-94fb15835963?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Pinapple Jam</h5>
                                            <p class="card-text"><strong>Price</strong> : 350</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card"h-100>
                                    <img src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Sunglasses</h5>
                                            <p class="card-text"><strong>Price</strong> : 600</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                </div>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3">
                                <div class="card"h-100>
                                    <img src="https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=1400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDR8fHByb2R1Y3R8ZW58MHx8MHx8fDA%3D" class="card-img-top" alt="..."style={{ height: '200px', objectFit: 'cover' }}/>
                                        <div class="card-body">
                                            <h5 class="card-title">Plant Pot</h5>
                                            <p class="card-text"><strong>Price</strong> : 1000</p>
                                            <a href="#" class="btn btn-primary">Add to cart</a>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewProducts