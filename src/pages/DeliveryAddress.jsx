import React, { Component, useState } from 'react'
import logo from '../img/delievery logo.png'

export default class DeliveryAddress extends Component {
    render() {
        return (
            <div>
                <div className="row mt-3 mx-3" style={{ marginTop: 5 }}>
                    <div className="col-md-3">
                        <div style={{ marginTop: 50, marginLeft: 10 }} className="p-center">
                            <img src={logo} alt />
                            <h3>Welcome</h3>
                            <p className="white-p">You are 30 seconds away from compleating your order!</p>
                        </div>
                        <div className="p-center">
                            <button type="submit" className="btn btn-white btn-rounded back-button">Go back</button>
                        </div>
                    </div>
                    <div className="col-md-9 justify-content-center">
                        <br />
                        <div className="card card-custom pb-4">
                            <div className="card-body mt-0 mx-5">
                                <div className="p-center mb-3 pb-2 mt-3">
                                    <h4 style={{ color: '#495057' }}>Delivery Details</h4>
                                </div>
                                <form className="mb-0">
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form9Example1" className="form-control input-custom" placeholder="First name" /* onChangep={p => setFirstName(p)} */ />
                                                {/* <p className="errormsg">{first_namelog}</p> */}
                                                {/* <label className="form-label" htmlFor="form9Example1"></label> */}
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form9Example2" className="form-control input-custom" placeholder="Last name" /* onChangep={p => setLastName(p)} */ />
                                                {/* <p className="errormsg">{last_namelog}</p> */}
                                                {/* <label className="form-label" htmlFor="form9Example2"></label> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form9Example3" className="form-control input-custom" placeholder="Phone number" /* onChangep={p => setPhone(p)} */ />
                                                {/* <p className="errormsg">{phonelog}</p> */}
                                                {/* <label className="form-label" htmlFor="form9Example3"></label> */}
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="form9Example6" className="form-control input-custom" placeholder="City" />                                                {/* <p className="errormsg">{emaillog}</p>
                                                <label className="form-label" htmlFor="form9Example4"></label> */}
                                            </div>
                                        </div>
                                        <div className="col">
                                            <div className="form-outline">
                                                <input type="text" id="typeEmail" className="form-control input-custom" placeholder="zip" /* onChangep={p => setZip(p)} */ />
                                                {/* <p className="errormsg">{emaillog}</p>
                                                <label className="form-label" htmlFor="form9Example4"></label> */}
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Flat,House no,Building,Company,Aparment *" /* onChangep={p => setHome(p)} */ />
                                        {/* <p className="errormsg">{homelog}</p> */}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Area,Colony,Street,Sector,Village " /* onChangep={p => setArea(p)} */ />
                                        {/* <p className="errormsg">{arealog}</p> */}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="LandMark" /* onChangep={p => setLandmark(p)} */ />
                                        {/* <p className="errormsg">{landmarklog}</p> */}
                                    </div>
                                    <div className="form-group">
                                        <input type="text" className="form-control" placeholder="Town/City *" /* onChangep={p => setCity(p)} */ />
                                        {/* <p className="errormsg">{citylog}</p> */}
                                    </div>
                                    <div className="float-end ">
                                        {/* Submit button */}
                                        <button type="submit" className="btn btn-primary btn-rounded" style={{ backgroundColor: '#fc5c65' }} /* onPress={() => submit(user_Data, log_Setters)} */>Place order</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}



function validation(values) {
    let result = {};
    result.is_error = false;
    let phone_pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    let email_pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (values.first_name === "") {
        result.is_error = true;
        result.first_name = "First name is required";
    }
    if (values.last_name === "") {
        result.is_error = true;
        result.last_name = "Last name is required";
    }
    if (values.phone === "") {
        result.is_error = true;
        result.phone = "Phone is required";
    }
    if (values.email === "") {
        result.is_error = true;
        result.email = "Email is required";
    }
    if (values.email !== "" && !email_pattern.test(values.email)) {
        result.is_error = true;
        result.email = "Email is not valid";
    }
    if (values.phone !== "" && !phone_pattern.test(values.phone)) {
        result.is_error = true;
        result.phone = "Phone number is not valid";
    }
    if (values.home === "") {
        result.is_error = true;
        result.home = "Field required";
    }
    if (values.area === "") {

        result.is_error = true;
        result.area = "Field required";
    }
    if (values.city === "") {
        result.is_error = true;
        result.city = "City is required";
    }
    if (values.zip === "") {
        result.is_error = true;
        result.zip = "Pincode is required";
    }
    if (values.state === "") {
        result.is_error = true;
        result.state = "State is required";
    }
    if (values.addressType === "") {
        result.is_error = true;
        result.addressType = "Address type is required";
    }
    if (values.landmark === "") {
        result.is_error = true;
        result.landmark = "Landmark is required";
    }

    return result;
}