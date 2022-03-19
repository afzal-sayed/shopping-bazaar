import React, { Component } from 'react'
import user from '../img/User.png';
import watch from '../img/watch1.png'
import { Link } from 'react-router-dom';


export default class MyOrder extends Component {
    render() {
        let First_name = localStorage.getItem("First_name");
        let Second_Name = localStorage.getItem("Second_Name");
        let Photo = localStorage.getItem("Photo");
        let Phone = localStorage.getItem("Phone");
        return (
            <div className="container g-0">
                <div className="container-fluid g-0 pt-3 pb-5">
                    <div className="row">
                        <div className="col-md-3 border border-dark border-1 rounded ">
                            <div className="osahan-account-page-left shadow-sm bg-white h-100 ">
                                <div className="border-bottom p-4 border-dark ">
                                    <div className="osahan-user text-center">
                                        <div className="osahan-user-media">
                                            <img src={Photo == null ? user : Photo} alt={First_name} className="mb-3 rounded-pill shadow-sm mt-1" />
                                            <div className="osahan-user-media-body">
                                                <h6 className="mb-2">{First_name} {Second_Name}</h6>
                                                <p className="mb-1">+91 8568224564</p>
                                                <p >sayyed0786afzal@gmail.com</p>
                                                <p className="mb-0 text-black font-weight-bold">
                                                    <Link className="text-primary mr-3" data-toggle="modal" data-target="#edit-profile-modal"
                                                        to="/UserProfile"><i className="icofont-ui-edit" /> EDIT</Link>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane  fade  active show" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                        <h4 className="font-weight-bold mt-0 mb-4 g-0">My Orders</h4><hr />
                                        <div className="bg-white card mb-4 order-list shadow-sm border border-dark">
                                            <div className="gold-members p-4">
                                                <a href="#">
                                                </a>
                                                <div className="media">
                                                    <a href="#">
                                                        <img className="mr-4" src={watch} alt="Generic placeholder image img img-responsive" />
                                                    </a>
                                                    <div className="media-body">
                                                        <a href="#">
                                                            <span className="float-right text-info"><b>Delivered on Mon, Dec 12, 7:18 PM
                                                            </b><i className="fas fa-regular fa-badge-check text-success" /></span>
                                                        </a>
                                                        <h6 className="mb-2">
                                                            <a href="#" />
                                                            <a href="#" className="text-black">Smart Watch (Grey)</a>
                                                        </h6>
                                                        <p className="text-gray mb-1"><i className="icofont-location-arrow" /> 304/A wing Rose
                                                            Apt Kausa Mumbra,Thane,400612,Maharashtra.
                                                        </p>
                                                        <p className="text-gray mb-3"><i className="icofont-list" /><b>ORDER #25102589748</b>
                                                            <i className="icofont-clock-time ml-2" /> Tue, Dec 06, 6:26 PM</p>
                                                        <p className="text-dark">Apple Smart Watches (Pack Of 2)
                                                        </p>
                                                        <hr className="hrblack" />
                                                        <div className="float-right">
                                                            <a className="btn btn-sm btn-outline-primary" href="#"><i className="icofont-headphone-alt" /> RETURN</a>
                                                            <a className="btn btn-sm btn-primary" href="#"><i className="fa-solid fa-arrows-retweet" /> REORDER</a>
                                                        </div>
                                                        <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Total Paid:</span> Rs.20000.00
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white card mb-4 order-list shadow-sm border border-dark">
                                            <div className="gold-members p-4">
                                                <a href="#">
                                                </a>
                                                <div className="media">
                                                    <a href="#">
                                                        <img className="mr-4" src={watch} alt="Generic placeholder image" />
                                                    </a>
                                                    <div className="media-body">
                                                        <a href="#">
                                                            <span className="float-right text-info"><b>Delivered on Mon, Dec 12, 7:18 PM
                                                            </b><i className="icofont-check-circled text-success" /></span>
                                                        </a>
                                                        <h6 className="mb-2">
                                                            <a href="#" />
                                                            <a href="#" className="text-black">Smart Watch (Grey)</a>
                                                        </h6>
                                                        <p className="text-gray mb-1"><i className="icofont-location-arrow" /> 304/A wing Rose
                                                            Apt Kausa Mumbra,Thane,400612,Maharashtra.
                                                        </p>
                                                        <p className="text-gray mb-3"><i className="icofont-list" /><b>ORDER #25102589748</b>
                                                            <i className="icofont-clock-time ml-2" /> Tue, Dec 06, 6:26 PM</p>
                                                        <p className="text-dark">Apple Smart Watches (Pack Of 2)
                                                        </p>
                                                        <hr className="hrblack" />
                                                        <div className="float-right">
                                                            <a className="btn btn-sm btn-outline-primary" href="#"><i className="icofont-headphone-alt" /> RETURN</a>
                                                            <a className="btn btn-sm btn-primary" href="#"><i className="icofont-refresh" />
                                                                REORDER</a>
                                                        </div>
                                                        <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Total Paid:</span> Rs.20000.00
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-white card  order-list shadow-sm border border-dark">
                                            <div className="gold-members p-4">
                                                <a href="#">
                                                </a>
                                                <div className="media">
                                                    <a href="#">
                                                        <img className="mr-4" src={watch} alt="Generic placeholder image" />
                                                    </a>
                                                    <div className="media-body">
                                                        <a href="#">
                                                            <span className="float-right text-info"><b>Delivered on Mon, Dec 12, 7:18 PM
                                                            </b><i className="icofont-check-circled text-success" /></span>
                                                        </a>
                                                        <h6 className="mb-2">
                                                            <a href="#" />
                                                            <a href="#" className="text-black">Smart Watch (Grey)</a>
                                                        </h6>
                                                        <p className="text-gray mb-1"><i className="icofont-location-arrow" /> 304/A wing Rose
                                                            Apt Kausa Mumbra,Thane,400612,Maharashtra.
                                                        </p>
                                                        <p className="text-gray mb-3"><i className="icofont-list" /><b>ORDER #25102589748</b>
                                                            <i className="icofont-clock-time ml-2" /> Tue, Dec 06, 6:26 PM</p>
                                                        <p className="text-dark">Apple Smart Watches (Pack Of 2)
                                                        </p>
                                                        <hr className="hrblack" />
                                                        <div className="float-right ">
                                                            <a className="btn btn-sm btn-outline-primary p-2" href="#"><i className="icofont-headphone-alt" /> RETURN</a>
                                                            <a className="btn btn-sm btn-primary p-2" href="#"><i className="icofont-refresh" /> REORDER</a>
                                                        </div>
                                                        <p className="mb-0 text-black text-primary pt-2"><span className="text-black font-weight-bold"> Total Paid:</span> Rs.20000.00
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
