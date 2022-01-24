import React, { Component } from 'react'
import { Link } from "react-router-dom";

import user from '../img/User.png';
import bgimge from '../img/bg.png';


export default class Account extends Component {
    render() {
        return (
            <div>
                <div className="container mb-4 pb-3 g-5 mt-3">
                    <div className="row border border-dark ">
                        <div className="col  ">
                            <div className="author-card pb-3  container-fluid ">
                                {/* <div className="author-card-cover" style={{ backgroundImage: { bgimge } }}>
                                    <a className="btn btn-style-1 btn-white btn-sm" href="#" data-toggle="tooltip"
                                        title data-original-title="You currently have 290 Reward points to spend">
                                        <i className="fa fa-award text-md" />290 points</a>
                                </div> */}
                                <div className="author-card-profile ">
                                    <div className="author-card-avatar">
                                        <img src={user} alt="Tazeen" />
                                    </div>
                                    <div className="author-card-details">
                                        <h5 className="author-card-name text-lg">Tazeen Shaikh</h5><span className="author-card-position">Joined
                                            December 06, 2021</span>
                                    </div>
                                </div>
                            </div><hr />
                            <div className="wizard container-fluid">
                                <nav className="list-group list-group-flush">
                                    < Link to='/SignUp' className="list-group-item" >
                                        <i className="fa fa-user text-muted" /> My Account
                                    </Link>
                                    < Link to='/MyOrder' className="list-group-item" >
                                        <i className="fa fa-angle-double-right text-muted" /> My Orders
                                    </Link>
                                    < Link to='/Address' className="list-group-item" >
                                        <i className="fa fa-home text-muted" /> My Addresses
                                    </Link>
                                    < Link to='/MyWishList' className="list-group-item" >
                                        <i className="fa fa-heart text-muted" /> My Wishlist
                                    </Link>
                                    < Link to='/Cartscreen' className="list-group-item" >
                                        <i className="fa fa-shopping-cart text-muted" /> My Cart
                                    </Link>
                                    <a className="list-group-item" href="#" >
                                        <i className="fa fa-sign-out text-muted" />Log Out</a>
                                    {/* < Link to='/Address' className="list-group-item" >
                                        <i className="fa fa-angle-double-right text-muted" /> My Credit
                                    </Link>
                                    < Link to='/MyCoupon' className="list-group-item" >
                                        <i className="fa fa-angle-double-right text-muted" /> My Coupons
                                    </Link>
                                    <a className="list-group-item" href="../HTML/Userprofile.html" target="__blank">
                                        <i className="fa fa-user text-muted" />Profile Settings</a>
                                    <a className="list-group-item" href="../HTML/deliveryaddress.html" target="__blank">
                                        <i className="fa fa-home text-muted" />Address</a>
                                    <a className="list-group-item" href="../HTML/Wishlist.html" target="__blank">
                                        <i className="fa fa-heart text-muted" />My Wishlist</a>
                                    <a className="list-group-item" href="../HTML/cartscreen.html" target="__blank">
                                        <i className="fa fa-shopping-cart text-muted" />My Cart</a>
                                    <a className="list-group-item" href="../HTML/login signup.html" target="__blank">
                                        <i className="fa fa-file text-muted" />Login/signup</a>
                                    <a className="list-group-item" href="../HTML/Receipt.html" target="__blank">
                                        <i className="fa fa-file-text text-muted" />Receipts</a> */}
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
