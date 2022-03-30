import React, { Component } from 'react'
import Logo from "../img/Logo.png"

export default class AboutUs extends Component {
    render() {
        return (
            <div className="AboutUs">
                <div className="row container">
                    <div className="col-3">
                        <img src={Logo} alt="Shopping Bazaar" className="Logo mt-5" />
                    </div>
                    <div className="col-8 mt-5">
                        <h1 className="typing">Shopping Bazaar...</h1>
                        <div className="typed">
                            <p className="mt-4"><strong>"Shopping Bazaar"</strong> is an E-commerce Shopping platform that is a combination of a <strong>Website</strong> and <strong>Application</strong> that we have created separately so that users can engage with various platforms and approach us.</p>
                            <p>A website that allows people to<strong> buy and sell </strong>physical goods, services, and digital products over the internet rather than at a brick-and-mortar location.</p>
                        </div>
                    </div>
                    <div className="typed">
                        <p>Through an e-commerce website, <strong>a business can process orders, accept payments, manage shipping and logistics, and provide customer service</strong>.</p>
                        <p><strong>Shopping Bazaar</strong> is a <strong>B2C E-Commerce business</strong>, which refers to the direct sale of items to the end-user.</p>
                        <p>The most familiar to the average person, a B2C site enables an exchange of goods or services between a business and a consumer, such as buying a T-shirt from your favorite online shop.</p>
                    </div> </div>
            </div>
        )
    }
}
