import React, { Component } from 'react'
import { Link } from "react-router-dom";
import Products from './Products';
import Slider from './Slider';
import Slider2 from './Slider2';


export default class Home extends Component {
    render() {
        return (
            <div className="container-fluid g-0">
                <div className="">
                    <Slider2 />
                </div>
                <div className="|">
                    <Products />
                </div>

            </div>
        )
    }
}
