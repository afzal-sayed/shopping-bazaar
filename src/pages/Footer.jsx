import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Footer extends Component {
	render() {
		return (
			<div>
				<footer className='site-footer'>
					<div className='container'>
						<div className='row'>

							<div className='col-xs-6 col-md-3'>
								<h6>Categories</h6>
								<ul className='footer-links'>
									<li>
										<Link to='/Fashion' >Fashion</Link>
									</li>
									<li>
										<Link to='/Electronics' >Electronics</Link>
									</li>
									<li>
										<Link to='/Groceries' >Groceries</Link>
									</li>
									<li>
										<Link to='/Hygiene' >Hygiene</Link>
									</li>
									{/* <li>
										<Link to='/Beauty_&_More' >Beauty & More</Link>
									</li> */}
								</ul>
							</div>
							<div className='col-xs-6 col-md-3'>
								<h6>Quick Links</h6>
								<ul className='footer-links'>
									<li>
										<Link to='/AboutUs' >About Us</Link>
									</li>
									<li>
										<Link to='/ContactUs'>Contact Us</Link>
									</li>
									{/* <li>
										<Link to='/Contribute' >Contribute</Link>
									</li>
									<li>
										<Link to='/Privacy_Policy' >Privacy Policy</Link>
									</li> */}
								</ul>
							</div>
							<div className='col-xs-6 col-md-3'>
								<Link to='/ContactUs'>
									<h6>Contact Us</h6>
								</Link>
								<ul className='footer-links'>
									<li>
										<p>Phone no: <a href='tel:7021583371'>7021583371</a></p>
									</li>
									<li>
										<p>Email id: <a href='mailto:sayyed0786afzal@gmail.com'>sayyed0786afzal@gmail.com</a></p>
									</li>
								</ul>
							</div>

							{/* <div className='col-sm-4 col-md-3'>
								<a href='#'>

									<h6>About</h6>
								</a>
								<p className='text-justify'>
									<i>Shopping Bazaar</i>
								</p>
							</div> */}
						</div>
						<hr className='hrblack' />
					</div>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-sm-6 col-xs-12'>
								<p className='copyright-text'>
									Copyright © 2021 All Rights Reserved by <a href=''>Shopping Bazaar</a>.
								</p>
							</div>

						</div>
					</div>
				</footer>
			</div>
		);
	}
}
