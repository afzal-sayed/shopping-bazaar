import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className="">
                <nav className="d-flex-md navbar navbar-expand-md  navbar-dark navclr">
                    <div className="container-fluid">
                        <Link to='/' className="navbar-brand logosize">Shopping Bazaar</Link>
                        <button className="navbar-toggler hambutton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarScroll">
                            <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: 100 }}>
                                <li className="nav-item">
                                    <Link to='/' className="nav-link active" aria-current="page">Home</Link>
                                </li>
                                <li className="nav-item ">
                                    <Link to='/Products' className="nav-link button">Products</Link>
                                </li>
                                <li className="nav-item dropdown dropdown-toggle-split">
                                    <Link to='/Cartegory' className="nav-link dropdown-toggle button" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Categories
                                    </Link>
                                    <ul className="dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                                        <li>
                                            <Link to='/Fashion' className="dropdown-item">Fashion</Link>
                                        </li>
                                        <li>
                                            <Link to='/Electronics' className="dropdown-item">Electronics</Link>
                                        </li>
                                        <li>
                                            <Link to='/Groceries' className="dropdown-item">Groceries</Link>
                                        </li>
                                        <li>
                                            <Link to='/Hygine' className="dropdown-item">Hygine</Link>
                                        </li>
                                        <li>
                                            <Link to='/Beauty & More' className="dropdown-item">Beauty & More</Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <Link to='/ContactUs' className="nav-link button">Contact Us</Link>

                                </li>
                            </ul>
                            <form className="d-flex">
                                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="button btn-outline-primary " type="submit">Search</button>
                            </form>
                            <div className="icons">
                                <Link to='/WishList' className="fas fa-heart" />
                                <Link to='/Cartscreen' className="fas fa-shopping-cart" />
                                <Link to='/Account' className="fas fa-user" />

                            </div>

                        </div>
                    </div>
                </nav >

            </div >

        );
    }
}
