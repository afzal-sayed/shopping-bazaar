import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./Styles/css/styles.css";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import CartScreen from "./pages/CartScreen";
import Category from "./pages/Category";
import DeliveryAddress from "./pages/DeliveryAddress";
import LoginSignUp from "./pages/LoginSignUp";
import MyOrder from "./pages/MyOrder";
import UserProfile from "./pages/UserProfile";
import OrderPlaced from "./pages/OrderPlaced";
import Products from "./pages/Products";
import Receipt from "./pages/Receipt";
import WishList from "./pages/WishList";
import ContactUs from "./pages/ContactUs";
import Address from './pages/Address';
import SignUp from "./pages/SignUp";
import GetAccount from "./pages/getAccount";
import Searched from "./pages/searchpage";
import SingleProduct from "./pages/SingleProduct.jsx"
import Hygiene from "./pages/Hygiene";
import Electronics from "./pages/Electronic";
import Fashion from "./pages/Fashion";
import Groceries from "./pages/Groceries";
import AboutUs from "./pages/AboutUs";

function App() {
	return (
		<div className="">
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/Account' element={<GetAccount />} />
					<Route path='/Cartscreen' element={<CartScreen />} />
					<Route path='/Category' element={<Category />} />
					<Route path='/AboutUs' element={<AboutUs />} />
					<Route path='/DeliveryAddress' element={<DeliveryAddress />} />
					<Route path='/FeaturedProduct/:id' element={<SingleProduct />} />
					<Route path='/LoginSignUp' element={<LoginSignUp />} />
					<Route path='/MyOrder' element={<MyOrder />} />
					<Route path='/UserProfile' element={<UserProfile />} />
					<Route path='/SignUp' element={<SignUp />} />
					<Route path='/OrderPlaced' element={<OrderPlaced />} />
					<Route path='/Products' element={<Products />} />
					<Route path='/Hygiene' element={<Hygiene />} />
					<Route path='/Fashion' element={<Fashion />} />
					<Route path='/Electronics' element={<Electronics />} />
					<Route path='/Groceries' element={<Groceries />} />
					<Route path='/Search/:search' element={<Searched />} />
					<Route path='/Receipt' element={<Receipt />} />
					<Route path='/ContactUs' element={<ContactUs />} />
					<Route path='/WishList' element={<WishList />} />
					<Route path='/Address' element={<Address />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
