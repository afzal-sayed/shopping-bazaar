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
										<Link to='/Hygine' >Hygine</Link>
									</li>
									<li>
										<Link to='/Beauty_&_More' >Beauty & More</Link>
									</li>
								</ul>
							</div>
							<div className='col-xs-6 col-md-3'>
								<h6>Quick Links</h6>
								<ul className='footer-links'>
									<li>
										<Link to='/About_Us' >About Us</Link>
									</li>
									<li>
										<Link to='/ContactUs'>Contact Us</Link>
									</li>
									<li>
										<Link to='/Contribute' >Contribute</Link>
									</li>
									<li>
										<Link to='/Privacy_Policy' >Privacy Policy</Link>
									</li>
								</ul>
							</div>
							<div className='col-xs-6 col-md-3'>
								<Link to='/ContactUs'>
									<h6>Contact Us</h6>
								</Link>
								<ul className='footer-links'>
									<li>
										<p>Phone no: <a href='tel:1234'>1234</a></p>
									</li>
									<li>
										<p>Email id: <a href='mailto:asd@gmail.com'>asd@gmail.com</a></p>
									</li>
								</ul>
							</div>

							<div className='col-sm-4 col-md-3'>
								<a href='/About Us'>

									<h6>About</h6>
								</a>
								<p className='text-justify'>
									<i>Shopping Bazaar</i>
								</p>
							</div>
						</div>
						<hr />
					</div>
					<div className='container'>
						<div className='row'>
							<div className='col-md-8 col-sm-6 col-xs-12'>
								<p className='copyright-text'>
									Copyright © 2021 All Rights Reserved by <a href='#'>Shopping Bazaar</a>.
								</p>
							</div>
							{/* <div className='col-md-4 col-sm-6 col-xs-12'>
								<ul className='social-icons'>
									<li>
										<a className='facebook' href='#'>
											<i className='fa fa-facebook fa-fw' />
										</a>
									</li>
									<li>
										<a className='twitter' href='#'>
											<i className='fa fa-twitter' />
										</a>
									</li>
									<li>
										<a className='linkedin' href='#'>
											<i className='fa fa-linkedin' />
										</a>
									</li>
								</ul>
							</div> */}
						</div>
					</div>
				</footer>
			</div>
		);
	}
}
