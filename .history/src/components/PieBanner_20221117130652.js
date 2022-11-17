import React from "react";
import Nav from './Nav'
import { Link } from "react-router-dom"
import Icon from './Icon'
//Renders top banner image
export default function PieBanner() {
  return(
      <div className="piebanner_img">
         <Nav />
        <div className="piebanner_text_and_button_container">
        <Icon />
            <div className="piebanner_text">
              Handmade sweets, pastries and cakes<br />
              right here in the heart of Texas
            </div>
            <Link to='/order'><div className="piebanner_order_button">ORDER NOW</div></Link>
              
        </div>
      </div>
    
  )
}