import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import "./Styles/css/styles.css";

import Header from "./pages/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import Account from "./pages/Account";
import CartScreen from "./pages/CartScreen";
import Category from "./pages/Category";
import DeliveryAddress from "./pages/DeliveryAddress";
import LoginSignUp from "./pages/LoginSignUp";
import MyOrder from "./pages/MyOrder";
import UserProfile from "./pages/UserProfile";
import OrderPlaced from "./pages/OrderPlaced";
import Products from "./pages/Products";
import Reciept from "./pages/Reciept";
import WishList from "./pages/WishList";
import ContanctUs from "./pages/ContanctUs";
import Address from './pages/Address';
import SignUp from "./pages/SignUp";
import GetAccount from "./pages/getAccount";
import Searched from "./pages/searchpage";
import FeaturedProduct from "./pages/FeaturedProduct.Jsx";

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
					<Route path='/DeliveryAddress' element={<DeliveryAddress />} />
					<Route path='/FeaturedProduct' element={<FeaturedProduct />} />
					<Route path='/LoginSignUp' element={<LoginSignUp />} />
					<Route path='/MyOrder' element={<MyOrder />} />
					<Route path='/UserProfile' element={<UserProfile />} />
					<Route path='/SignUp' element={<SignUp />} />
					<Route path='/OrderPlaced' element={<OrderPlaced />} />
					<Route path='/Products' element={<Products />} />
					<Route path='/Search/:search' element={<Searched />} />
					<Route path='/Reciept' element={<Reciept />} />
					<Route path='/ContactUs' element={<ContanctUs />} />
					<Route path='/WishList' element={<WishList />} />
					<Route path='/Address' element={<Address />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
