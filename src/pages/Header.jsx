import React, { Component } from "react";
import { Link } from "react-router-dom";
import { mainBackend } from "./MainBackend";


function Header() {
    let search = React.useRef()

    function handleClick(e) {
        e.preventDefault()
        console.log(search.current.value)
        window.location.href = '/Search/' + search.current.value;
    }

    return (
        <div >
            <nav className="d-flex-md navbar navbar-expand-lg  navbar-dark navclr bg-gradient">
                <div className="container-fluid">
                    <Link to='/' className="navbar-brand logosize">Shopping Bazaar</Link>
                    <button className="navbar-toggler hambutton" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ bsScrollHeight: 100 }}>
                            <li className="nav-item">
                                <Link to='/' className="nav-link" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item ">
                                <Link to='/Products' className="nav-link ">Products</Link>
                            </li>
                            <li className="nav-item dropdown dropdown-toggle-split">
                                <Link to='/Cartegory' className="nav-link dropdown-toggle " href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                                <Link to='/ContactUs' className="nav-link ">Contact Us</Link>

                            </li>
                        </ul>
                        <form className="d-flex justify-content-end" onSubmit={handleClick}>
                            <input className="form-control me-2" type="text" ref={search} placeholder="Search" aria-label="Search" />
                            <button className="button1 btn btn-outline-primary " type="submit">Search</button>
                        </form>
                        <div className="icon d-flex justify-content-center ">
                            <Link to='/WishList' className="fas fa-heart p-2 " />
                            <Link to='/Cartscreen' className="fas fa-shopping-cart p-2" />
                            <Link to='/Account' className="fas fa-user p-2 " />
                        </div>
                    </div>
                </div>
            </nav >

        </div >

    );
}

export default Header;