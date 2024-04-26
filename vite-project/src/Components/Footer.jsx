import React from "react";
import axios from "axios";
import appStore from "../assets/appStore.webp"
import playstore from "../assets/playstore.webp"
import insta from "../assets/instagram.png"
import facebook from "../assets/facebook.png"
import twit from "../assets/twitter.png"

function Footer(){
    return(
        <>
         <footer>
        <font className="Footwhole">Wholesale</font>
        <font className="Footsaga">Saga</font>
        <hr/>
        <img className="appstore" src={appStore} alt="!" />
        <img className="playstore" src={playstore} alt="!" />
        <div className="box1">
         <font className="title">COMPANY</font>
         <font className="title">STAY CONNECTED</font>
         <font className="title">LINKS</font>
        </div>
          <font className="para1">Privacy Policy<br/>
                Terms and Condition <br />
                  Help & Support</font>
          <font className="para2">Call: 1800-4190-786 <br />
                REGISTERED OFFICE ADDRESS: <br />
                DELIGHTFUL GOURMET PVT LTD <br />
                Maruthi Infotech Center 11/1,12/1 B wing 1st <br />
                Floor Amarjyothi layout Intermediate ring <br />
                road Domlur, B.B.M.P East, Karnataka-560071 <br />
                Bangalore, Karnataka - 560071</font>
          <font className="para3">
               Quality check <br />
                Franchisee <br />
                Refer Earn <br />
                Store Locator <br />
                Sitemap
          </font>
          <div className="social">
          <img  className="insta" src={insta} alt="!" />
          <img  className="facebook" src={facebook} alt="!" />
          <img  className="twit" src={twit} alt="!" />
          </div>
        </footer>
        </>
    )
}
export default Footer;