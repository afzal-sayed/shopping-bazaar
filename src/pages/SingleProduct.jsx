import React from 'react'
import {mainBackend} from "./MainBackend"
import { useParams } from 'react-router';

function print(text){
    return text.startsWith("data:image") ? text : "data:image/png;base64," + text
}

function SingleProduct() { 
    let seachstring = useParams();
    let [data,setData] = React.useState();
    let [currentImage,setcurrentImage] = React.useState();
    let [images ,setImages] = React.useState();
    
    React.useEffect(()=>{
        mainBackend.get("/store/getitem/",{params:{product_ID:seachstring.id}}).then(
            (response)=>{
            if(response.status == 200){
                let imgs = response.data.Product_details.images
                imgs.push(response.data.Display_Image)
                setImages(imgs)
                setData(response.data)
                setcurrentImage(response.data.Display_Image)
            }
        })
    },[true])
    return (
        <div>
            <section className="featured" id="featured">
                <h1 className="heading"><br /><br /> <span>featured</span> products </h1>
                <div className="row">
                    <div className="image-container">
                        <div className="small-image">
                            {data == null? <p>not available</p>:data.Product_details.images.map((img,index)=><img src={print(img)} onClick={()=>{setcurrentImage(img)}} className="big-image-3" key={index} />)}
                        </div>
                        <div className="big-image">
                            {currentImage == null ? <p>not available</p>: <img src={print(currentImage)} className="big-image-3"  /> }
                            
                        </div>
                    </div>
                    <div className="content">
                        <h3>{data==null?0:data.Name}</h3>
                        <div className="stars">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="far fa-star" />
                        </div>
                        <p>{data==null? <p>XXXXXXXXX</p> : data.Product_details.description}.</p>
                        <div className="price">Rs.{data==null?0:data.Price} <span>Rs.999</span></div>
                        <a href="#" className="btn">add to cart</a>
                    </div>
                </div>
            </section>

        </div>
    )
}
export default SingleProduct ;
