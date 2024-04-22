import React from "react";
import axios from "axios";
import Navbar from "../Components/Navbar";
// import { CCarouselCaption } from '@coreui/react'
// import { CCarouselItem } from '@coreui/react'
// import { CCarousel } from '@coreui/react'
// import { CImage } from '@coreui/react'
import { CCarousel, CCarouselItem, CImage } from '@coreui/react';
import 'bootstrap/dist/css/bootstrap.min.css'
import caro1 from "../assets/caro1.jpg"
import caro2 from "../assets/caro2.jpg"
import caro3 from "../assets/caro3.jpg"

function Home(){
    return(
        <>
        <Navbar/>
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
        <div>
            <font className="shop-by-cat">Shop By Categories</font>
            <font className="premium-meat">Premium quality meats and much more</font>
        </div>
        </>
    )
}
export default Home;