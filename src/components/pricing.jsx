
import React, { Component } from 'react'
import Title from './Title'; 

import pic1 from '../images/Room (1).jpeg';
import { Link } from 'react-router-dom';

export default class Pricing  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
            <div className=" pricing-div"> 
            <section id="pricing" class="pricing">

<div class="" >

  <header class="section-header text-center">
    <h2> Room Price</h2>
    {/* <p>Check our Pricing</p> */}
  </header>

  <div class="row col-lg-11 mx-auto" >

  <div class="col-lg-3 col-md-6" >
      <div class="box">
        <h3 >Suite</h3>
        <div class="price"><sup>$</sup>59<span> / day</span></div>
        <img  src={pic1} class="img-fluid" alt=""/>
        <ul>
          <li>Bedroom and Living Room</li>
          <li>Room Service</li>
          <li>Complementary Snacks</li>
        </ul>
        <a href="" class="btn-buy">Book Now</a>
      </div>
    </div>

    <div class="col-lg-3 col-md-6" >
      <div class="box"><span class="featured">Featured</span>
        <h3 >Standard Room</h3>
        <div class="price"><sup>$</sup>39<span> / day</span></div>
        <img  src={pic1} class="img-fluid" alt=""/>
        <ul>
          <li>Comfortable Bed</li>
          <li>Room Service</li>
          <li>Complementary Snacks</li>
        </ul>
        <a href="" class="btn-buy">Book Now</a>
      </div>
    </div>
    
    <div class="col-lg-3 col-md-6" >
      <div class="box">
        <h3 >Twin Room</h3>
        <div class="price"><sup>$</sup>49<span> / day</span></div>
        <img  src={pic1} class="img-fluid" alt=""/>
        <ul>
          <li>Twin Bed</li>
          <li>Room Service</li>
          <li>Complementary Snacks</li>
        </ul>
        <a href="" class="btn-buy">Book Now</a>
      </div>
    </div>

    <div class="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
            <div class="box">
              
              <h3 s>Corner king</h3>
              <div class="price"><sup>$</sup>49<span> / day</span></div>
              <img src={pic1}  class="img-fluid" alt=""/>
              <ul>
                <li>Comfortable Room</li>
                <li>Room Service</li>
                <li>Georgous View</li>
              </ul>
              <a href="#" class="btn-buy">Book Now</a>
            </div>
          </div>

  </div>

</div>

</section>
           </div>
        )
    }
}
