import React, { Component } from 'react'
import tshirt4 from '../img/tshirt4.png'
import tshirt5 from '../img/tshirt5.png'
import tshirt6 from '../img/tshirt6.png'
import tshirt2 from '../img/tshirt2.png'

function FeaturedProduct() {

    return (
        <div>
            <section className="featured" id="featured">
                <h1 className="heading"><br /><br /> <span>featured</span> products </h1>
                <div className="row">
                    <div className="image-container">
                        <div className="small-image">
                            <img src={tshirt4} className="featured-image-3" alt />
                            <img src={tshirt5} className="featured-image-3" alt />
                            <img src={tshirt6} className="featured-image-3" alt />
                            <img src={tshirt2} className="featured-image-3" alt />
                        </div>
                        <div className="big-image">
                            <img src={tshirt4} className="big-image-3" alt />
                        </div>
                    </div>
                    <div className="content">
                        <h3>Men's tshirts</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta facilis praesentium odit voluptas
                            illum iure libero quis fuga commodi. Autem.</p>
                        <div className="price">Rs.700 <span>Rs.999</span></div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default { FeaturedProduct };
