import React, { Component } from 'react'
import { Link } from "react-router-dom";

import lapy2 from "../img/lapy2.png";
import shoe from "../img/shoes1.png";
import fruit from "../img/fruit1.png";




export default class Slider extends Component {
    render() {
        /*  let menu = document.querySelector("#menu-bar");
         let navbar = document.querySelector(".navbar");
 
         menu.onclick = () => {
             menu.classList.toggle("fa-times");
             navbar.classList.toggle("active");
         };
 
         window.onscroll = () => {
             menu.classList.remove("fa-times");
             navbar.classList.remove("active");
         };
 
         let slides = document.querySelectorAll(".slide-container");
         let index = 0;
 
         function next() {
             slides[index].classList.remove("active");
             index = (index + 1) % slides.length;
             slides[index].classList.add("active");
         }
 
         function prev() {
             slides[index].classList.remove("active");
             index = (index - 1 + slides.length) % slides.length;
             slides[index].classList.add("active");
         }
 
         document.querySelectorAll(".featured-image-1").forEach((image_1) => {
             image_1.addEventListener("click", () => {
                 var src = image_1.getAttribute("src");
                 document.querySelector(".big-image-1").src = src;
             });
         });
 
         document.querySelectorAll(".featured-image-2").forEach((image_2) => {
             image_2.addEventListener("click", () => {
                 var src = image_2.getAttribute("src");
                 document.querySelector(".big-image-2").src = src;
             });
         });
 
         document.querySelectorAll(".featured-image-3").forEach((image_3) => {
             image_3.addEventListener("click", () => {
                 var src = image_3.getAttribute("src");
                 document.querySelector(".big-image-3").src = src;
             });
         });
 
         document.querySelectorAll(".featured-image-3").forEach((image_3) => {
             image_3.addEventListener("click", () => {
                 var src = image_3.getAttribute("src");
                 document.querySelector(".big-image-4").src = src;
             });
         });
 
         document.querySelectorAll(".featured-image-3").forEach((image_3) => {
             image_3.addEventListener("click", () => {
                 var src = image_3.getAttribute("src");
                 document.querySelector(".big-image-4").src = src;
             });
         }); */



        return (
            <div className="pb-5">
                <section className="home" id="home">
                    <div className="slide-container active">
                        <div className="slide">
                            <div className="content">
                                <span>Latest Electronics</span>
                                <h3>Dell Tablets &amp; Laptops</h3>
                                <p>If you're looking to add another computer to your household, here are plenty of refurbished options
                                    on sale that will get the job done without breaking the bank. </p>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                            <div className="image">
                                <img src={lapy2} className="shoe" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide-container">
                        <div className="slide">
                            <div className="content">
                                <span>nike innovation 2020</span>
                                <h3>Nike Air Zoom Viperfly</h3>
                                <p>The Nike Air Zoom Viperfly is completed by an Atomknit (a new version of Nike Flyknit) upper, which
                                    maximizes heel lockdown and decreases material waste. In addition, the foam in the heel provides
                                    impact protection and aids the transition from full-speed sprint to post-race walk.</p>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                            <div className="image">
                                <img src={shoe} className="shoe" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide-container">
                        <div className="slide">
                            <div className="content">
                                <span>Kashmiri Apples</span>
                                <h3>Ambri Apple Pride</h3>
                                <p>These apples have a flat base. The cream flesh texture is crispy and firm with a sharp floral note.
                                </p>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                            <div className="image">
                                <img src={fruit} className="shoe" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide-container">
                        <div className="slide">
                            <div className="content">
                                <span> Daily Essentials</span>
                                <h3>Dettol Original Handwash</h3>
                                <p>Dettol Orignal Handwash (Pack of 3)
                                </p>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                            <div className="image">
                                <img src="../img/essential1.png" className="shoe" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="slide-container">
                        <div className="slide">
                            <div className="content">
                                <span>Beauty and Cosmetics</span>
                                <h3>Loreal Beauty Cosmetics</h3>
                                <p>Find here the list of Loreal Products at lowest price with great offers and discounts.
                                </p>
                                <a href="#" className="btn">add to cart</a>
                            </div>
                            <div className="image">
                                <img src="../img/beauty1.png" className="shoe" alt="" />
                            </div>
                        </div>
                    </div>
                    <div id="prev" className="fas fa-chevron-left" onclick="prev()" />
                    <div id="next" className="fas fa-chevron-right" onclick="next()" />
                </section>
            </div >

        )
    }
}
