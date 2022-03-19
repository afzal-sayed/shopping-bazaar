import React, { Component } from 'react'

export default class OrderPlaced extends Component {
    render() {
        return (
            <div id="orderContainer">
                <div id="check"><i className="fas fa-check-circle" /></div>
                <div id="aboutCheck">
                    <h1> Order Placed Successfully! </h1>
                    <p> We've sent you an email with the Order details. </p>
                </div>
            </div>
        )
    }
}
