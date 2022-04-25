import React, { Component } from 'react'
import Title from './Title'; 

import { Link } from 'react-router-dom';
import logo from  '../images/logo2.png'

export default class About  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
            <section className="container page-section" id="about">
             <div className=" row"> 
             <div className='col-md-5 about-logo fade-in'>
                  <img src={logo} alt='kenenisa hotel' />
               </div>
               
               <div className='col-md-7 about-text fade-in'>
               <div class="vl"></div>
                   <h1>About Us</h1>
                   <p >A lavish hotel named after a world-class athlete Kenenisa Bekele – ቀነኒሳ በቀለ; born 13 June 1982.
An Ethiopian long-distance runner and the current world record and Olympic record holder in both the 5000-meter and 10,000-metre events. The hotel owns 50 spacious rooms; 10 Suite rooms, 18 Standard rooms, 12 Twin bedrooms, and 10 Corner King Rooms; a Lobby bar, Restaurant & wellness wing with a well-equipped gym & lavish spa.
Kenenisa Hotel is the obvious choice both for business & leisure. We strive to provide the best, most personalized, and efficient service you could ever imagine.</p>
               </div></div>
               
           </section>
        )
    }
}
