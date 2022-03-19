import React, { Component } from 'react'
import { Link } from "react-router-dom";
import { mainBackend } from "./MainBackend"
import user from '../img/User.png';
import bgimge from '../img/bg.png';
export default class Account extends Component {
    logout() {
        let token = localStorage.getItem("login_token")
        mainBackend.post("/user/logout/", {}, { headers: { Authorization: "Token " + token } })
            .then((response) => {
                if (response.status == 200) {
                    localStorage.clear()
                    window.location.href = "/"
                }
            })
    }
    render() {
        let First_name = localStorage.getItem("First_name");
        let Second_Name = localStorage.getItem("Second_Name");
        let Photo = localStorage.getItem("Photo"); 
        return (
            <div>
                <div className="container mb-4 pb-3 g-5 mt-3">
                    <div className="row border border-dark ">
                        <div className="col  ">
                            <div className="author-card pb-3  container-fluid ">

                                <div className="author-card-profile ">
                                    <div className="author-card-avatar">
                                        <img src={Photo == null ? user : Photo} alt={First_name} />
                                    </div>
                                    <div className="author-card-details">
                                        <h5 className="author-card-name text-lg">{First_name} {Second_Name}</h5>
                                    </div>
                                </div>
                            </div>
                            <hr className="hrblack" />
                            <div className="wizard container-fluid">
                                <nav className="list-group list-group-flush">

                                    < Link to='/MyOrder' className="list-group-item" >
                                        <i className="fa fa-angle-double-right text-muted" /> My Orders
                                    </Link>
                                    < Link to='/Address' className="list-group-item" >
                                        <i className="fa fa-home text-muted" /> My Addresses
                                    </Link>
                                    < Link to='/WishList' className="list-group-item" >
                                        <i className="fa fa-heart text-muted" /> My Wishlist
                                    </Link>
                                    < Link to='/Cartscreen' className="list-group-item" >
                                        <i className="fa fa-shopping-cart text-muted" /> My Cart
                                    </Link>
                                    <a onClick={this.logout} className="list-group-item" href="#" >
                                        <i className="fa fa-sign-out text-muted" />Log Out</a>

                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div >

        )
    }
}
