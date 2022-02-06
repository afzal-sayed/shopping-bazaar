import React, { Component } from 'react'
import tshirt2 from '../img/tshirt2.png'
import shoe3 from "../img/shoe3.png"
import fruit4 from "../img/fruit4.png"
export default class WishList extends Component {
    render() {
        return (
            <div className="container">
                <div className="container-fluid d-flex justify-content-center">
                    <div className="col-lg-8 pb-5">
                        <h1>My Wishlist</h1> <hr />
                        {/* Item*/}
                        <div className="cart-item d-md-flex justify-content-between"><span className="remove-item"><i className="fa fa-times" /></span>
                            <div className="px-3 my-3">
                                <a className="cart-item-product" href="#">
                                    <div className="cart-item-product-thumb"><img src={tshirt2} alt="Product" /></div>
                                    <div className="cart-item-product-info">
                                        <h4 className="cart-item-product-title">Mens Tshirt Blue</h4>
                                        <div className="text-lg text-body font-weight-medium pb-1">
                                            <h3>
                                                Rs. 500
                                            </h3>
                                        </div><span>Availability:
                                            <span className="text-warning font-weight-medium">2 - 3 Weeks</span></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* Item*/}
                        <div className="cart-item d-md-flex justify-content-between"><span className="remove-item"><i className="fa fa-times" /></span>
                            <div className="px-3 my-3">
                                <a className="cart-item-product" href="#">
                                    <div className="cart-item-product-thumb"><img src={shoe3} alt="Product" /></div>
                                    <div className="cart-item-product-info">
                                        <h4 className="cart-item-product-title">Stylish Shoes</h4>
                                        <div className="text-lg text-body font-weight-medium pb-1">
                                            <h3>
                                                Rs. 2530
                                            </h3>
                                        </div><span>Availability:
                                            <span className="text-warning font-weight-medium">2 - 3 Weeks</span></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        {/* Item*/}
                        <div className="cart-item d-md-flex justify-content-between"><span className="remove-item"><i className="fa fa-times" /></span>
                            <div className="px-3 my-3">
                                <a className="cart-item-product" href="#">
                                    <div className="cart-item-product-thumb"><img src={fruit4} alt="Product" /></div>
                                    <div className="cart-item-product-info">
                                        <h4 className="cart-item-product-title">Fresh Mangoes</h4>
                                        <div className="text-lg text-body font-weight-medium pb-1">
                                            <h3>
                                                Rs. 188.50
                                            </h3>
                                        </div> <span> Availability:
                                            <span className="text-success font-weight-medium">In Stock</span></span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input className="custom-control-input" type="checkbox" defaultChecked id="inform-me" />
                            <label className="custom-control-label" htmlFor="inform-me">Inform me when item from my wishlist is
                                available</label>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
