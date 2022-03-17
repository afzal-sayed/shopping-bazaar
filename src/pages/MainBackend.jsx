// import React, { Component } from "react";
import * as axios from 'axios';
import config from '../config.json';

function getheader() {
    localStorage.getItem("login_token", (err, result) => {
        if (result) {
            return { Authorization: "Token " + result }
        }
        else return;
    })
}
let mainBackend = axios.create({
    baseURL: String(config.baseURL),
    Headers: getheader()
})

export { mainBackend };
