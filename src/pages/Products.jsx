import React, { Component } from 'react'
import "../Styles/css/styling.css";

import mfasion1 from '../img/Mens fashion/mfasion1.png'
import mfasion2 from '../img/Mens fashion/mfashion2.png'
import shirt from '../img/shirt.png'
import mfashion3 from '../img/Mens fashion/trouser1.png'
import mfashion4 from '../img/Mens fashion/track1.png'
import mentshirt from '../img/Mens fashion/tshirts.png'
import wfashion from '../img/Womens fashion/w1.png'
import wfashion2 from '../img/Womens fashion/w2.png'
import wfashion3 from '../img/Womens fashion/w3.png'
import wfashion4 from '../img/Womens fashion/w4.png'
import wfashion5 from '../img/Womens fashion/w5.png'
import wfashion6 from '../img/Womens fashion/w6.png'
import foot1 from '../img/footwears/f1.png'
import foot2 from '../img/footwears/f2.png'
import foot3 from '../img/footwears/f3.png'
import foot4 from '../img/footwears/f4.png'
import foot5 from '../img/women boots.png'
import foot6 from '../img/footwears/f6.png'
import watch1 from '../img/watch1.png'
import mobile from '../img/mobiles and electronics/e1.png'
import laptop from '../img/mobiles and electronics/e3.png'
import headphones from '../img/mobiles and electronics/e4.png'
import tablets from '../img/mobiles and electronics/e5.png'
import headphones2 from '../img/mobiles and electronics/e6.png'
import orange from '../img/fruits & vegetables/v1.png'
import potato from '../img/fruits & vegetables/v2.png'
import cabbage from '../img/fruits & vegetables/v3.png'
import sweet from '../img/fruits & vegetables/v4.png'
import green from '../img/fruits & vegetables/v5.png'
import apples from '../img/fruits & vegetables/v6.png'
import { mainBackend } from "./MainBackend"



function Card(data) {
    let dat = data.data

    let image = dat.Display_Image.startsWith("data:image") ? dat.Display_Image : "data:image/png;base64," + dat.Display_Image
    return (
        <div className="box border border-dark">
            <div className="icons">
                <a href="#" className="fas fa-heart" />
            </div>
            <img src={image} alt="mensfashiom" />
            <div className="content">
                <h3>{dat.Name}</h3>
                <div className="price">Rs. {dat.Price}</div>
                <a href="#" className="btn button1">add to cart</a>
            </div>
        </div>
    )
}

export default class Products extends Component {
    categories = ["Hygiene", "Groceries", "Fashion", "Electronic"]
    categorie_num = { Electronic: 1, Fashion: 2, Groceries: 3, Hygiene: 4 }
    state = {};
    // Electronic 1
    // Fashion 2
    // Groceries 3
    // Hygiene 4




    getAllData() {
        this.categories.map((categorie) => {
            mainBackend.get("/store/getSortItems/", { params: { categories: this.categorie_num[categorie] } })
                .then((response) => { this.setState({ [categorie]: response.data.results }) })
        })
    }

    componentDidMount() {

        this.getAllData()
    }


    render() {

        return (
            <div>
                <section className="products" id="products">

                    <h1 className="heading"> Electronic </h1><hr />
                    <div className="box-container ">
                        {this.state.Electronic != null ? this.state.Electronic.slice(0,).map((elemnt) => <Card data={elemnt} key={elemnt.Name} />) : <p>no prod available</p>}
                    </div>
                </section>

                <section className="products" id="products">
                    <h1 className="heading"> Fashion </h1><hr />
                    <div className="box-container">
                        {this.state.Fashion != null ? this.state.Fashion.slice(0,).map((elemnt) => <Card data={elemnt} key={elemnt.Name} />) : <p>no prod available</p>}
                    </div>
                </section>

                <section className="products" id="products">
                    <h1 className="heading"> Groceries </h1><hr />
                    <div className="box-container">
                        {this.state.Groceries != null ? this.state.Groceries.slice(0,).map((elemnt) => <Card data={elemnt} key={elemnt.Name} />) : <p>no prod available</p>}
                    </div>
                </section>

                <section className="products" id="products">
                    <h1 className="heading"> Hygiene </h1><hr />
                    <div className="box-container">
                        {this.state.Hygiene != null ? this.state.Hygiene.slice(0,).map((elemnt) => <Card data={elemnt} key={elemnt.Name} />) : <p>no prod available</p>}
                    </div>
                </section>

            </div>
        )
    }
}
