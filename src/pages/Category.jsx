import React, { Component } from 'react'
import fashion from '../img/mfashion.png'
import wfashion from '../img/wfashion.png'
import watch from '../img/watch (2).png'

export default class Category extends Component {
    render() {
        return (
            <div>
                <div className="container-fluid">
                    <div className="d-flex justify-content-center mt-3"> <span className="text text-center">Finding Best Products Now<br /> in
                        Your Fingertips</span> </div>
                    <div className="row mt-2 g-4">
                        <div className="col-md-3">
                            <div className="card p-1">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Men's</span> <span>Fashion</span> </div>
                                    <div> <img src={fashion} height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Women's</span> <span>Fashion</span> </div>
                                    <div> <img src={wfashion} height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Smart</span> <span>Watches</span> </div>
                                    <div> <img src={watch} height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Groceries</span></div>
                                    <div> <img src="../img/grocery.png" height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2tr5">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Fruits &amp;</span> <span>Vegetables</span> </div>
                                    <div> <img src="../img/fru&veg.png" height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"><span>Headphones</span> </div>
                                    <div> <img src="../img/headphone.png" height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Hygiene</span> <span /> </div>
                                    <div> <img src="../img/hygine.png" height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Laptops</span> </div>
                                    <div> <img src="../img/lapy.png" height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Beauty &amp;</span> <span>More</span> </div>
                                    <div> <img src="../img/beauty (2).png" height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Accesories</span> </div>
                                    <div> <img src="../img/accessories.png" height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Daily</span> <span>Essentials</span> </div>
                                    <div> <img src="../img/dailyessentials.png" height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3">
                            <div className="card p-2">
                                <div className="d-flex justify-content-between align-items-center p-2">
                                    <div className="flex-column lh-1 imagename"> <span>Footwears</span> </div>
                                    <div> <img src="../img/footwear.png" height={100} width={100} /> </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
