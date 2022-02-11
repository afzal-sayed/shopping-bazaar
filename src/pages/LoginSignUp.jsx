import React, { Component, useState } from 'react'
import { Link } from "react-router-dom";


export default class LoginSignUp extends Component {
    render() {
        return (
            <div className="backbg">
                <div className="container d-flex justify-content-center g-0  pb-5 pt-5">
                    <div className="contaier-fluid">
                        <div className="wrapper">
                            <div className="title-text">
                                <div className="title login">
                                    <u>Login Form</u>
                                </div>
                                <div className="title signup">
                                    Signup Form
                                </div>
                            </div>
                            <div className="form-container">
                                {/* <div className="slide-controls">
                                    <input type="radio" name="slide" id="login" defaultchecked />
                                    <input type="radio" name="slide" id="signup" />
                                    <label htmlFor="login" className="slide login">Login</label>
                                    <Link to="/UserProfile" className="slide signup">
                                        <label htmlFor="signup" className="slide signup">Signup</label>
                                    </Link>
                                    <div className="slider-tab" />
                                </div> */}
                                <div className="form-inner">
                                    <form action="#" className="login">
                                        <div className="field">
                                            <input type="text" placeholder="Email Address" required />
                                        </div>
                                        <div className="field">
                                            <input type="password" placeholder="Password" required />
                                        </div>
                                        <div className="pass-link mt-3">
                                            <a href="#">Forgot password?</a>
                                        </div>
                                        <div className="field btn">
                                            <div className="btn-layer" />
                                            <input type="submit" defaultValue="Login" />
                                        </div>
                                        <div className="signup-link">
                                            Dont have an account? <Link to="/UserProfile">Signup now</Link>
                                        </div>
                                    </form>
                                    <form action="#" className="signup">
                                        <div className="field">
                                            <input type="text" placeholder="Email Address" required />
                                        </div>
                                        <div className="field">
                                            <input type="password" placeholder="Password" required />
                                        </div>
                                        <div className="field">
                                            <input type="password" placeholder="Confirm password" required />
                                        </div>
                                        <div className="field btn">
                                            <div className="btn-layer" />
                                            <input type="submit" defaultValue="Signup" />
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
