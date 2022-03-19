import React from 'react'
import "../Styles/css/styling.css";

import {mainBackend} from "./MainBackend"
import { useParams } from 'react-router';


function Card (data){
    let dat = data.data
    function handleClick(){
        window.location.href = "/FeaturedProduct/"+dat.id
    }
    let image = dat.Display_Image.startsWith("data:image") ? dat.Display_Image : "data:image/png;base64,"+dat.Display_Image
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


function Searched() {
    let seachstring = useParams();
    let [data,setData] = React.useState();
    React.useEffect(()=>{
        mainBackend.get("/store/getSortItems/",{
            params: {
                searchString:seachstring.search
            }}).then((response)=>{
                setData(response.data.results)
            }).catch(err=>console.log(err))
    },[true])
        return (
            <div>
                <section className="products" id="products">

                    <h1 className="heading"> you searched for,   </h1><hr />
                    <div className="box-container ">
                        {data!= null && data.length >0 ?data.map((elemnt)=> <Card data={elemnt} key={elemnt.Name} /> ):<p>no product available</p> }
                    </div>
                </section>
               
            </div>
        )
    }

export default Searched;