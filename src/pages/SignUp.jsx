import React, { Component } from "react";
import axios from "axios";

class SignUp extends React.Component {
    handlesignup(e) {
        e.preventDefault();
        let mail = document.forms["signup-form"]["email"].value;
        let name = document.forms["signup-form"]["Name"].value;
        let password = document.forms["signup-form"]["psw"].value;
        let repeat = document.forms["signup-form"]["psw-repeat"].value;
        let warn = document.getElementById("signupwarningbox");
        const pat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (mail == "" || name == "" || password == "") {
            warn.innerHTML = "Please fill all the Details";
            //idhr pr batana user ko ki mail ya to name yato password khali hai bharne usko
        } else if (password.length < 8) {
            warn.innerHTML = "Password too short minimum 8 charachters required";
            //idhr user ko bolna password ki length 8 se kam nhi chahiye
        } else if (!pat.test(mail)) {
            ///idhr user ko bata mail sahi nhi hai
            warn.innerHTML = "Please enter a valid email";
        } else if (password != repeat) {
            warn.innerHTML = "Passwords not matching please correct it!";
        } else {
            const instance = axios.create({
                baseURL: "http://192.168.0.112:8000",
                timeout: 1000,
            });
            console.log(
                "name" + " " + name + " " + "email" + " " + mail + " " + "password" + password,
            );
            let config = {
                data: {
                    name: name,
                    email: mail,
                    password: password,
                },
            };
            instance.post("/users/", config).then(function (response) {
                console.log(response.data);
                if ((response.status = 200)) {
                    alert("signup success");
                }
                if (response.status >= 400 && response.status < 500) {
                    alert("bad request");
                }
            });
        }
    }
    render() {
        return (
            < div className="">
                <div className="container bodysign" >
                    <div className="title">Registration</div>
                    <div className="content">
                        <form action="#">
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Full Name</span>
                                    <input type="text" placeholder="Enter your name" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Username</span>
                                    <input type="text" placeholder="Enter your username" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Email</span>
                                    <input type="text" placeholder="Enter your email" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Phone Number</span>
                                    <input type="text" placeholder="Enter your number" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Password</span>
                                    <input type="text" placeholder="Enter your password" required />
                                </div>
                                <div className="input-box">
                                    <span className="details">Confirm Password</span>
                                    <input type="text" placeholder="Confirm your password" required />
                                </div>
                            </div>
                            <div className="gender-details">
                                <input type="radio" name="gender" id="dot-1" />
                                <input type="radio" name="gender" id="dot-2" />
                                <input type="radio" name="gender" id="dot-3" />
                                <span className="gender-title">Gender</span>
                                <div className="category">
                                    <label htmlFor="dot-1">
                                        <span className="dot one" />
                                        <span className="gender">Male</span>
                                    </label>
                                    <label htmlFor="dot-2">
                                        <span className="dot two" />
                                        <span className="gender">Female</span>
                                    </label>
                                    <label htmlFor="dot-3">
                                        <span className="dot three" />
                                        <span className="gender">Prefer not to say</span>
                                    </label>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" defaultValue="Register" />
                            </div>
                        </form>
                    </div>
                </div >
            </div >

        );
    }
}
export default SignUp;
