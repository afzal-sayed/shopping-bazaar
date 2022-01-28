import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Products from './Products';
import Slider from './Slider';


export default class Home extends Component {
    render() {
        return (
            <div className="container-lg-fluid container-sm ">
                <Slider />
                <Products />

            </div>
        )
    }
}
