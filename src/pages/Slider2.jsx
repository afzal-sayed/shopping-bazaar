import React, { Component } from 'react'
import { Link } from "react-router-dom";

import lapy2 from "../img/lapy2.png";
import shoe from "../img/shoes1.png";
import fruit from "../img/fruit1.png";

export default class Slider2 extends Component {
    render() {
        return (
            <div className=" mt-3 g-2 container-fluid ">
                <div id="carouselExampleCaptions" className="carousel carousel-fade slide" data-bs-ride="carousel">
                    <div className="carousel-indicators ">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={0} className="active" aria-current="true" aria-label="Slide 1" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={1} aria-label="Slide 2" />
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to={2} aria-label="Slide 3" />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active ">
                            <div className="">
                                <img src={lapy2} className="d-block w-100" alt={lapy2} />
                            </div>
                            <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-linear bg-opacity-25">
                                <h5>Laptops</h5>
                                <p>Latest laptops with great specs.</p>
                                <button className="btn border border-primary text-light btn-primary bg-gradient">Click to know more</button>
                            </div>
                        </div>
                        <div className="carousel-item ">
                            <div className="">
                                <img src={shoe} className="d-block img-responsive w-100" alt={lapy2} />
                            </div>
                            <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-linear bg-opacity-25">
                                <h5>Amazing Shoes</h5>
                                <p>We have amazing shoes just for you guys with great pricing.</p>
                                <button className="btn btn-primary btn-gradient">Click to know more</button>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div className="">
                                <img src={fruit} className="d-block w-100" alt={lapy2} />
                            </div>
                            <div className="carousel-caption d-none d-md-block bg-dark bg-gradient bg-linear bg-opacity-25">
                                <h5>Fruit and vegetables</h5>
                                <p>Fresh and healthy Fruit and Vegetables.</p>
                                <button className="btn btn-primary btn-gradient">Click to know more</button>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

        )
    }
}
