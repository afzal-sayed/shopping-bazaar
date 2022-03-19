import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { mainBackend } from "./MainBackend"

function Card({ item }) {
    let image = item.Items_ID.Display_Image.startsWith("data:image/png;base64,") ? item.Items_ID.Display_Image : "data:image/png;base64," + item.Items_ID.Display_Image;
    return (

        <div className="product d-flex justify-content-between ">
            <div className=" h-100 ">
                <img src={image} className="img-responsive img w-100" />
            </div>
            <div className="product-info ">
                <h3 className="product-name">{item.Items_ID.Name}</h3>
                <h4 className="product-price">Rs. {item.Items_ID.Price}</h4>
                <h4 className="product-offer">50%</h4>
                <p className="product-quantity">Qnt: <input defaultValue={1} />
                </p><p className="product-remove">
                    <i className="fa fa-trash" aria-hidden="true" />
                    <span className="remove">Remove</span>
                </p>
            </div>
        </div>
    )
}

function CartScreen() {
    let [cartItems, setCartItems] = React.useState([])

    React.useEffect(() => {
        let token = localStorage.getItem("login_token")
        if (token != null) {
            mainBackend.get("/store/getItemsInCart/", { headers: { Authorization: "Token " + token } })
                .then((response) => {
                    if (response.status == 200) {
                        setCartItems(response.data)
                    }
                })

        }
    }, [true])
    return (
        <div className="container ">
            <div className=" g-0">
                <h1>Shopping Cart</h1> <hr />
                <div className="cart">
                    <div className="products container h-100">

                        {cartItems === [] || cartItems === null ? <p>no items in cart</p> : cartItems.map((item) => <Card item={item} key={item.id} />)}
                    </div>
                    <div className="cart-total container">
                        <p>
                            <span>Total Price</span>
                            <span>Rs. {cartItems === [] || cartItems === null ? 0 : cartItems.reduce((price, item) => price + item.Items_ID.Price, 0)}</span>
                        </p>
                        <p>
                            <span>Number of Items</span>
                            <span>{cartItems === [] || cartItems === null ? 0 : cartItems.length}</span>
                        </p>
                        <Link to='/OrderPlaced' >Proceed to Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartScreen;