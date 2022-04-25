import service1 from '../images/slide (3).jpeg'
import service2 from '../images/gym1.jpeg'
import React, { Component } from 'react'

function MoreService() {
    return (
      <>
<section className="page-section" id="more-services">
<div className="container">
  
  <div className="row  justify-content-around">
    <div className="card">
      <div className='service-picture'> 
       <img src={service1} alt="Accomodation"/>
       </div>
      <h4 className="service-heading">Lobby bar</h4>
      <p className="text-muted">For a jovial gathering with friend’s family or colleagues, after a busy day, enjoy the casual, warm atmosphere of our lobby bar at Kenenisa hotel Addis Ababa Combine fun and stylish relaxation.</p>
    </div>
    <div className="card ">
    <div className='service-picture'> 
       <img src={service2} alt="Restaurant"/>
       </div>
      <h4 className="service-heading">Wellness wing</h4>
      <p className="text-muted">Enclosing a lavish Spa & state-of-the-art gym our wellness wing provides the best relaxing environment for all age groups. Selection of massages, steam, sauna & Jacuzzi.</p>
    </div>
   
  </div>
</div>
</section>
</>)}
export default MoreService;