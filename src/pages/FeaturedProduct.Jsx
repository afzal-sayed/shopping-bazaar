import React, { Component } from 'react'

function FeaturedProduct() {

    return (
        <div>
            <section className="featured" id="featured">
                <h1 className="heading"><br /><br /> <span>featured</span> products </h1>
                <div className="row">
                    <div className="image-container">
                        <div className="small-image">
                            <img src="./img/tshirt4.png" className="featured-image-3" alt />
                            <img src="./img/tshirt5.png" className="featured-image-3" alt />
                            <img src="./img/tshirt6.png" className="featured-image-3" alt />
                            <img src="./img/tshirt2.png" className="featured-image-3" alt />
                        </div>
                        <div className="big-image">
                            <img src="./img/tshirt4.png" className="big-image-3" alt />
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
