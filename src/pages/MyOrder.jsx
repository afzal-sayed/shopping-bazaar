import React, { Component } from 'react'

export default class MyOrder extends Component {
    render() {
        return (
            <div>

                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <div className="osahan-account-page-left shadow-sm bg-white h-100">
                                <div className="border-bottom p-4">
                                    <div className="osahan-user text-center">
                                        <div className="osahan-user-media">
                                            <img className="mb-3 rounded-pill shadow-sm mt-1" src="../img/user2.png" alt="gurdeep singh osahan" />
                                            <div className="osahan-user-media-body">
                                                <h6 className="mb-2">Tazeen Shaikh</h6>
                                                <p className="mb-1">+91 8568224564</p>
                                                <p>tazeensk0114@gmail.com</p>
                                                <p className="mb-0 text-black font-weight-bold"><a className="text-primary mr-3" data-toggle="modal" data-target="#edit-profile-modal" href="Userprofile.html"><i className="icofont-ui-edit" /> EDIT</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4" id="myTab" role="tablist">
                                    <li className="nav-item">
                                        <a className="nav-link" id="orders-tab" data-toggle="tab" href="#orders" role="tab" aria-controls="orders" aria-selected="false"><i className="icofont-food-cart" /> Orders</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="osahan-account-page-right shadow-sm bg-white p-4 h-100">
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane  fade  active show" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                                        <h4 className="font-weight-bold mt-0 mb-4">My Orders</h4>
                                        <div className="bg-white card mb-4 order-list shadow-sm">
                                            <div className="gold-members p-4">
                                                <a href="#">
                                                </a>
                                                <div className="media">
                                                    <a href="#">
                                                        <img className="mr-4" src="../img/watch1.png" alt="Generic placeholder image" />
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
                                                        <hr />
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
                                        <div className="bg-white card mb-4 order-list shadow-sm">
                                            <div className="gold-members p-4">
                                                <a href="#">
                                                </a>
                                                <div className="media">
                                                    <a href="#">
                                                        <img className="mr-4" src="../img/watch1.png" alt="Generic placeholder image" />
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
                                                        <hr />
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
                                        <div className="bg-white card  order-list shadow-sm">
                                            <div className="gold-members p-4">
                                                <a href="#">
                                                </a>
                                                <div className="media">
                                                    <a href="#">
                                                        <img className="mr-4" src="../img/watch1.png" alt="Generic placeholder image" />
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
                                                        <hr />
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
