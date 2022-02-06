import React, { Component } from 'react'
import { Link } from "react-router-dom";

import user2 from '../img/User.png';
export default class UserProfile extends Component {
    render() {
        return (

            <div className="register">
                <div className="container register g-5 pt-3 pb-3 h-100 w-100">
                    <div className="row">
                        <div className="col-md-3 register-left">
                            <img src={user2} alt="user profile " className="img-responsive w-25 h-70" />
                            <h2>Tazeen shaikh</h2>
                            <p>user's short bio</p>
                        </div>
                        <div className="col-md-9 register-right">
                            <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                                <li className="nav-item">
                                    <Link to="/UserProfile" className="nav-link active" id="home-tab" data-toggle="tab" role="tab" aria-controls="home" aria-selected="true">Signup</Link>
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
                                                    {/* <input type="radio" name="gender" value="male" />
                                                    <input type="radio" name="gender" value="" /> */}


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
                                                    <option>Gujrat</option>
                                                    <option>Rajasthan</option>
                                                    <option>Madhya Pradesh</option>
                                                    <option>Tamil Nadu</option>
                                                    <option>Kerala</option>
                                                    <option>Karnataka</option>
                                                    <option>Andhra Pradesh</option>
                                                    <option>West Bengal</option>
                                                    <option>Bihar</option>
                                                    <option>Uttar Pradesh</option>
                                                    <option>Jharkhand</option>
                                                    <option>Odisha</option>
                                                    <option>Chhattisgarh</option>
                                                    <option>Punjab</option>
                                                    <option>Jammu and Kashmir</option>
                                                    <option>Uttarakhand</option>
                                                    <option>Haryana</option>
                                                    <option>Himachal Pradesh</option>
                                                    <option>Chandigarh</option>
                                                    <option>Ladakh</option>
                                                    <option>Andaman and Nicobar Islands</option>
                                                    <option>Delhi</option>
                                                    <option>Tripura</option>
                                                    <option>Meghalaya</option>
                                                    <option>Assam</option>
                                                    <option>Arunachal Pradesh</option>
                                                    <option>Nagaland</option>
                                                    <option>Manipur</option>
                                                    <option>Mizoram</option>
                                                    <option>Sikkim</option>
                                                    <option>Goa</option>
                                                    <option>Puducherry</option>
                                                </select>
                                            </div>
                                            <input type="text" maxLength={6} minLength={6} className="form-control" placeholder="Pincode *" />
                                        </div>
                                        <input type="submit" className="btnRegister btn btn-gradient" value="Register" />
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
