import React, { Component } from 'react'
import { mainBackend } from "./MainBackend"
import { Link } from "react-router-dom";

export default function Address() {
    let [shit, setShit] = React.useState(false);
    let [address, setAddress] = React.useState("");
    React.useEffect(() => {
        localStorage.getItem("login_token", (err, res) => {
            if (err) {
                console.log(err)
            }
            if (res) {
                mainBackend.get("/resident/getAddress/", { headers: { Authorization: "Token " + res } }).then(Response => {
                    console.log(Response.data)
                    setAddress(Response.data)
                    setShit(true)
                })
            }
        })
    }, [shit])
    return (
        <div className="container-fluid">
            <div className="row mb-5 d-flex">
                <div className="col-md-4 col-sm-12 g-5 d-flex  ">
                    <div className="section-title text-center border border-dark h-100 w-100 d-flex justify-content-center align-items-center">
                        < Link to='/DeliveryAddress' className="list-group-item" >
                            <i className="fa fa-plus text-muted " /> Add Addresses
                        </Link>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 g-5 ">
                    <div className="section-title text-center border border-dark">
                        <h3>Name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur hic asperiores, laudantium aliquid quibusdam officia. Nihil, quo voluptates? Quidem, similique totam nemo dolore voluptates facere ipsum voluptatibus ipsa blanditiis.</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-12 g-5 ">
                    <div className="section-title text-center border border-dark">
                        <h3>Name</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat, dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis aspernatur hic asperiores, laudantium aliquid quibusdam officia. Nihil, quo voluptates? Quidem, similique totam nemo dolore voluptates facere ipsum voluptatibus ipsa blanditiis.</p>
                    </div>
                </div>
            </div>

        </div>

    )
}
/* function SingleAddress({ item }) {
    return (

        <div>
            <p style={{ fontWeight: "bold", fontSize: 17, margin: 5 }} >{item.item.Name}  {item.item.Phone_number} </p>
            <p style={{ margin: 10 }}>{item.item.Landmark} {item.item.Regein} {item.item.Town} {item.item.State} {item.item.Pincode}</p>
        </div>

    )
} */

