import React, { Component } from 'react';
import shoe3 from "../img/shoe3.png";
import tshirt2 from '../img/tshirt2.png';


export default class CartScreen extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <h1>Shopping Cart</h1>
                    <div className="cart">
                        <div className="products">
                            <div className="product">
                                <img src={shoe3} />
                                <div className="product-info">
                                    <h3 className="product-name">New Shoes</h3>
                                    <h4 className="product-price">Rs. 1,000</h4>
                                    <h4 className="product-offer">50%</h4>
                                    <p className="product-quantity">Qnt: <input defaultValue={1} name />
                                    </p><p className="product-remove">
                                        <i className="fa fa-trash" aria-hidden="true" />
                                        <span className="remove">Remove</span>
                                    </p>
                                </div>
                            </div>
                            <div className="product">
                                <img src={tshirt2} />
                                <div className="product-info">
                                    <h3 className="product-name">New Tshirt</h3>
                                    <h4 className="product-price">Rs. 2,000</h4>
                                    <h4 className="product-offer">40%</h4>
                                    <p className="product-quantity">Qnt: <input defaultValue={1} name />
                                    </p><p className="product-remove">
                                        <i className="fa fa-trash" aria-hidden="true" />
                                        <span className="remove">Remove</span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="cart-total">
                            <p>
                                <span>Total Price</span>
                                <span>Rs. 3,000</span>
                            </p>
                            <p>
                                <span>Number of Items</span>
                                <span>2</span>
                            </p>
                            <p>
                                <span>You Save</span>
                                <span>Rs. 1,000</span>
                            </p>
                            <a href="#">Proceed to Checkout</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
