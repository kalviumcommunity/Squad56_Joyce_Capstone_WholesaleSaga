import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import caro1 from "../assets/caro1.jpg";
import caro2 from "../assets/caro2.jpg";
import caro3 from "../assets/caro3.jpg";
import offer from "../assets/eliteOffers.jpg";
import party from "../assets/PartyPack.jpg";
import chicken from "../assets/chicken.webp";
import mutton from "../assets/mutton.webp";
import fish from "../assets/fish.jpg";
import ready from "../assets/ready-to-cook.webp";
import snack from "../assets/snack.webp";
import cold from "../assets/cold-cut.webp";
import egg from "../assets/egg.jpg";
import pickel from "../assets/pickel.webp";
import spice from "../assets/spice.jpg";
import dry from "../assets/dry-fish.jpg";
import gallery1 from "../assets/gallery1.jpg";
import gallery2 from "../assets/gallery2.webp";
import gallery3 from "../assets/gallery3.webp";
import plus from "../assets/plus.png";
import Footer from "../Components/Footer";
import { Link } from "react-router-dom";

function Home() {
  // const [cates, setCates] = useState([]);

  // useEffect(() => {
  //   axios.get('https://squad56-joyce-capstone-wholesalesaga-1.onrender.com/getHome')
  //     .then(response => {
  //       setCates(response.data);
  //     })
  //     .catch(error => {
  //       console.log("Error", error);
  //     });
  // }, []);

  return (
    <>
      <Navbar />
      <CCarousel controls indicators>
        <CCarouselItem>
          <CImage className="caro" src={caro1} alt="slide 1" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="caro" src={caro2} alt="slide 2" />
        </CCarouselItem>
        <CCarouselItem>
          <CImage className="caro" src={caro3} alt="slide 3" />
        </CCarouselItem>
      </CCarousel>
      <div className="title1">
        <font className="shop-by-cat">Shop By Categories</font>
        <font className="premium-meat">Premium quality meats and much more</font>
      </div>
      <div className="grid">


        
        {/* <div className="container">
          {cates.map(user => (
            <Link className="link" to='/Item' key={user._id}>
              <div className="item" key={user._id}>
                <img className="image" src={user.img} alt="!" />
                <font className="Fname">{user.category}</font>
              </div>
            </Link>
          ))}
        </div> */}


<div className="container">
          <Link className="link" to='/Offer'>
            <div className="item">
              <img className="image" src={offer} alt="!" />
              <font className="Fname">Offers</font>
            </div>
          </Link>
          <Link className="link" to='/Party'>
            <div className="item">
              <img className="image" src={party} alt="!" />
              <font className="Fname">Party Pack</font>
            </div>
          </Link>
          <Link className="link" to='/Item'>
            <div className="item">
              <img className="image" src={chicken} alt="!" />
              <font className="Fname">Chicken</font>
            </div>
          </Link>
          <Link className="link" to='/Mutton'>
            <div className="item">
              <img className="image" src={mutton} alt="!" />
              <font className="Fname">Mutton</font>
            </div>
          </Link>
        </div>
        <div className="container">
          <Link className="link" to='/Seafood'>
            <div className="item">
              <img className="image" src={fish} alt="!" />
              <font className="Fname">Sea Food</font>
            </div>
          </Link>
          <Link className="link" to='/Ready'>
            <div className="item">
              <img className="image" src={ready} alt="!" />
              <font className="Fname">Ready To Cook</font>
            </div>
          </Link>
          <Link className="link" to='/Snack'>
            <div className="item">
              <img className="image" src={snack} alt="!" />
              <font className="Fname">Snacks</font>
            </div>
          </Link>
          <Link className="link" to='/Cold'>
            <div className="item">
              <img className="image" src={cold} alt="!" />
              <font className="Fname">Cold Cuts</font>
            </div>
          </Link>
        </div>
        <div className="container">
          <Link className="link" to='/Egg'>
            <div className="item">
              <img className="image" src={egg} alt="!" />
              <font className="Fname">Eggs</font>
            </div>
          </Link>
          <Link className="link" to='/Pickel'>
            <div className="item">
              <img className="image" src={pickel} alt="!" />
              <font className="Fname">Pickles</font>
            </div>
          </Link>
          <Link className="link" to='/Spice'>
            <div className="item">
              <img className="image" src={spice} alt="!" />
              <font className="Fname">Spices</font>
            </div>
          </Link>
          <Link className="link" to='/Dryfish'>
            <div className="item">
              <img className="image" src={dry} alt="!" />
              <font className="Fname">Dry Fish</font>
            </div>
          </Link>
        </div>
      </div>
      <div>
        <font className="must">Must Try</font>
      </div>
      <div className="gallery">
        <div className="Gitem">
          <img className="Gimage" src={gallery1} alt="!" />
          <font className="Gname">Chicken Curry Cut - Small Pieces</font>
          <font className="Gweight">500g</font>
          <font className="Gpieces">| 12-18 Pieces | Serves 4</font>
          <font className="price">₹159</font>
          <button className="Badd"><img className="add" src={plus} alt="!" /></button>
        </div>
        <div className="Gitem">
          <img className="Gimage" src={gallery2} alt="!" />
          <font className="Gname">CPrawns Medium - Deshelled</font>
          <font className="Gweight">500g</font>
          <font className="Gpieces">| 20-30 Pieces | Serves 4</font>
          <font className="price">₹379</font>
          <button className="Badd"><img className="add" src={plus} alt="!" /></button>
        </div>
        <div className="Gitem">
          <img className="Gimage" src={gallery3} alt="!" />
          <font className="Gname">Sardine - Mathi</font>
          <font className="Gweight">500g</font>
          <font className="Gpieces">| 12-18 Pieces | Serves 4</font>
          <font className="price">₹149</font>
          <button className="Badd"><img className="add" src={plus} alt="!" /></button>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
