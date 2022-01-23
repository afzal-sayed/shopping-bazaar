import React, { Component } from 'react'

export default class ContanctUs extends Component {
    render() {
        return (
            <div className='container'>
                <form>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlInput1">Email address</label>
                        <input
                            type="email"
                            className="form-control border border-dark"
                            id="exampleFormControlInput1"
                            placeholder="name@example.com"
                        />
                        <label htmlFor="exampleFormControlInput1">Name</label>
                        <input
                            type="text"
                            className="form-control border border-dark"
                            id="exampleFormControlInput1"
                            placeholder="Your Good Name"
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1">
                            Select Your Query
                        </label>
                        <select className="form-control border border-dark" id="exampleFormControlSelect1">
                            <option>Select your issue</option>
                            <option>Membership</option>
                            <option>Payment</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1">Tell Us: </label>
                        <textarea
                            className="form-control border border-dark"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            placeholder="Elaborate your concern"
                            defaultValue={""}
                        />
                    </div>
                    <button className="btn btn-success">Submit</button>
                </form>
            </div>
        )
    }
}
