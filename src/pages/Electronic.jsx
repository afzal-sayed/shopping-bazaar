import React, { Component } from 'react'
import "../Styles/css/styling.css";
import { useNavigate } from 'react-router';
import { mainBackend } from "./MainBackend"



function Card(data) {
    let dat = data.data
    let navigator = useNavigate();
    function handleClick() {
        navigator("/FeaturedProduct/" + dat.id)
    }
    let image = dat.Display_Image.startsWith("data:image") ? dat.Display_Image : "data:image/png;base64," + dat.Display_Image
    return (
        <div className="box border border-dark" onClick={handleClick}>
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

export default class Electronics extends Component {
    categories = ["Hygiene", "Groceries", "Fashion", "Electronic"]
    categorie_num = { Electronic: 1, Fashion: 2, Groceries: 3, Hygiene: 4 }
    state = {};
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
            </div>
        )
    }
}
