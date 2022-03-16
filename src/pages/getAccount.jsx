import React from "react";
import Account from "./Account";
import LoginSignUp from "./LoginSignUp";

function GetAccount(){
    let token = localStorage.getItem("login_token")
    if(token===null){
        return <LoginSignUp/>
    }
    if(token){
        return <Account/>
    }
}

export default GetAccount