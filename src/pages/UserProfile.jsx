import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class UserProfile extends Component {
    render() {
        return (
            <div>
                <div className="container register">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src="../img/user2.png" alt="" />
                            <h2>Tazeen shaikh</h2>
                            <p>user's short bio</p>
                        </div>
                        <div className="col-md-9 register-right">
                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link to="/LoginSignUp" className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Signup</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/LoginSignUp" className="nav-link" id="profile-tab" data-toggle="tab" role="tab" aria-controls="profile" aria-selected="false">Login</Link>
                                </li>
                            </ul>
                            <div className="tab-content" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                    <h3 className="register-heading">My Profile</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="First Name *" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Last Name *" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Flat,House no,Building,Company,Aparment *" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Area,Colony,Street,Sector,Village " />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="LandMark" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Town/City *" />
                                            </div>
                                            <div className="form-group">
                                                <div className="maxl">
                                                    <label className="radio inline">
                                                        <input type="radio" name="gender" defaultChecked />
                                                        <span> Male </span>
                                                    </label>
                                                    <label className="radio inline">
                                                        <input type="radio" name="gender" />
                                                        <span>Female </span>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Your Email *" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" minLength={10} maxLength={10} name="txtEmpPhone" className="form-control" placeholder="Your Phone *" />
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option className="hidden" selected disabled>Select an Address Type
                                                    </option>
                                                    <option>Home</option>
                                                    <option>Office</option>
                                                </select>
                                            </div>
                                            <div className="form-group">
                                                <select className="form-control">
                                                    <option className="hidden" selected disabled>Select State
                                                    </option>
                                                    <option>Maharashtra</option>
                                                    <option>Madhya Pardesh</option>
                                                    <option>Uttar Pardesh</option>
                                                    <option>TamilNadu</option>
                                                </select>
                                            </div>
                                            <input type="text" maxLength={6} minLength={6} className="form-control" placeholder="Pincode *" />
                                        </div>
                                        <input type="submit" className="btnRegister" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
