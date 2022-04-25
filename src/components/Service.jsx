import service1 from '../images/service (1).jpeg'
import service2 from '../images/service (2).jpeg'
import service3 from '../images/service (3).jpeg'
import React, { Component } from 'react'

function Service() {
    return (
      <>
<section className="page-section" id="services">
<div className="container ">
  <div className="row">
    <div className="col-lg-12 text-center">
      <div className="section-heading ">
        <h2>Welcome to</h2>
        <h2>kenenisa hotel plus</h2>
</div>
    <div className='section-subheading '>
      <p>Kenenisa Hotel is the obvious choice both for business & leisure. We strive to provide the best, most personalized, and efficient service you could ever imagine.</p>
      </div>
   </div>
  </div>
  <div className="row d-flex justify-content-around">
    <div className=" card fade-in">
      <div className='service-picture'> 
       <img className="col-md-12" src={service3} alt="Accomodation"/>
       </div>
      <h4 className="service-heading">Accommodation</h4>
      <p className="text-muted">Each room is equipped with a High-tech Fire Protection system, Inbuilt Powerful Rainforest shower system, Double Glazed Windows that are soundproof. </p>
    </div>
    <div className=" card ">
    <div className='service-picture'> 
       <img className="col-md-12" src={service2} alt="Restaurant"/>
       </div>
      <h4 className="service-heading">Golden Restaurant</h4>
      <p className="text-muted">Located on the 1st floor, this restaurant can cater for up to 60 guests and serves buffet breakfast, lunch, and dinner as well as a comprehensive à-la-carte menu.</p>
    </div>
    <div className=" card ">
    <div className='service-picture'> 
       <img className="col-md-12" src={service1} alt="Meeting and Events"/>
       </div>
      <h4 className="service-heading">Meeting and Events</h4>
      <p className="text-muted">The hotel has 1 meeting hall or function room located on the 2nd floor. Our meeting halls are equipped with different amenities.</p>
    </div>
  </div>
</div>
</section>
</>)}
export default Service;