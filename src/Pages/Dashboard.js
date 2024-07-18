import React from "react";
import '../assets/styles/dashboard.css'
import banner from '../assets/images/banner.png';
import Elipse from '../assets/images/Ellipse-24.png'
import star from '../assets/images/Star-5.png'
import vector from '../assets/images/Vector.png'
import vector2 from '../assets/images/Vector-2.png'
import chart from  '../assets/images/chart.png'
import product1 from '../assets/images/Product1.png'
import product2 from '../assets/images/Product2.png'
import product3 from '../assets/images/Product3.png'
import product4 from '../assets/images/Product4.png'

const Dashboard = ()=>{
    return(
        <div className="hero">
            <section className="profile">
                <div className="banner"> 
                    <img loading = 'lazy' className="banner-img" src={banner} alt="Banner"/>
                <div className="ellipse">
                        <img loading = 'lazy' className="ellipse-img" src={Elipse} alt="Ellipse"/>
                    </div>
                </div>
                <div className="summary flex-row">
                <div className="Adam">
                <h1>Adam-son Store</h1>
                    <p>Another way to improve the readability of a website or app is to use clear and concise navigation. This helps to make it easy for you to find the information or features that you are looking for. It also helps to prevent you from becoming lost or overwhelmed.</p>
                </div>
                <button className="btn btn-1 nowrap">Edit Storefront</button>
                <button className="btn btn-2 nowrap">Add product</button>
                </div>
            </section>
            
            <section className="overview" >
            <p>Overview</p>
            <div className="flex-row d-1">
                <div className="card flex-row">
                    <div className="card-child-1 align-left">
                    <img loading = 'lazy' src={star} alt="star"/>
                    <p>Total Sales</p>
                    <h1>₦134,000</h1>
                    </div>
                    <span className="card-child-2"><img loading = 'lazy' src={vector} alt="vector"/>56.5%</span>
                </div>
                <div className="card flex-row">
                    <div className="card-child-1 align-left">
                        <img loading = 'lazy' src={star} alt="star"/>
                        <p>Total Orders</p>
                        <h1>120</h1>
                    </div>
                    <span className="card-child-2"><img loading = 'lazy' src={vector} alt="vector"/>56.5%</span>
                </div>
                <div className="card flex-row">
                    <div className="card-child-1 align-left">
                        <img loading = 'lazy' src={star} alt="star"/>
                        <p>Total Vectors</p>
                        <h1>54</h1>
                    </div>
                    <span className="card-child-3"><img loading = 'lazy' src={vector2} alt="vector"/>56.5%</span>
                </div>
                </div>
                <div className="d-2 flex-row">
                    <div className="card-2">
                        <div className=" c-1 flex-row">
                            <div className="f-1">
                                <h3>Real-Time Sales</h3>
                                <p>Here are the monthly sales stats</p>
                            </div>
                            <div className="grid y-1">
                                <span className="flex v-1">
                                <span className="c-1-span lp"></span><p>Oder</p>
                                </span>
                                <span className="flex v-1">
                                <span className="c-1-span p"></span><p>Revenue</p>
                                </span>
                            </div>
                        </div>
                        <img loading = 'lazy' src= {chart} alt='chart' className="chart"/>
                    </div>
                    <div className="card-2 sub-card">
                        <div className=" c-1 flex-row">
                                <div className="f-1">
                                    <h3>Real-Time Sales</h3>
                                    <p>Here are the monthly sales stats</p>
                                </div>
                                <div className="span-div">
                                    <span>view all</span>
                                </div>
                        </div>
                        <div className="product flex-row">
                        <figure>
                            <img loading = 'lazy' src= {product2} className="product-img" alt="product img"/>
                            <figcaption>23% increase</figcaption>
                        </figure>
                            
                        <figure>
                            <img loading = 'lazy' src= {product1} className="product-img" alt="product img"/>
                            <figcaption>23% increase</figcaption>
                        </figure>

                        <figure>
                            <img loading = 'lazy' src= {product3} className="product-img" alt="product img"/>
                            <figcaption>23% increase</figcaption>
                        </figure>

                        <figure>
                            <img loading = 'lazy' src= {product4} className="product-img" alt="product img"/>
                            <figcaption>23% increase</figcaption>
                        </figure>
                        </div>
                    </div>
                </div>
            </section>
            <section className="last-section flex">
                <div className="tag">
                    <h3>Recent Orders</h3>
                    <p>Here are the most recent financial transaction</p>
                </div>
                <div className="grid-1 grid table">
                    <div className="table-header grid nowrap">
                        <div class="grid-item-1 grid-item">Product Name</div>
                        <div class="grid-item">Order Number</div>
                        <div class="grid-item">Date</div>
                        <div class="grid-item">Price</div>
                        <div class="grid-item">Status</div>
                    </div>
                    <div className="table-data grid">
                    <div className="item-1 grid">
                        <div class="grid-item grid-item-1 flex g-1">
                            <div className="sphere"></div>
                            <div>
                                <h3>Product Name</h3>
                                <p>Product Description</p>
                            </div>
                        </div>
                        <div class="grid-item">#1234567</div>
                        <div class="grid-item">12 - April - 2023</div>
                        <div class="grid-item">N10,000</div>
                        <div class="grid-item"><span className="span-1">Completed</span></div>
                    </div>
                    <div className="item-2 grid">
                    <div class="grid-item grid-item-1">
                    <div class="grid-item grid-item-1 flex g-1">
                            <div className="sphere"></div>
                            <div>
                                <h3>Product Name</h3>
                                <p>Product Description</p>
                            </div>
                        </div>
                    </div>
                    <div class="grid-item">
                        <p>#1234567</p>
                    </div>
                    <div class="grid-item">12 - April - 2023</div>
                    <div class="grid-item">N10,000</div>
                    <div class="grid-item"><span className="span-2">Pending</span></div>
                    </div>
                    </div>
                    
                </div>
            </section>
            
        </div>
    )
}

export default Dashboard;