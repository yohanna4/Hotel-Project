import React, { Component } from 'react' 
import background from '../images/background (2).jpg';
{/* <div class="img-area"> <img  src={pic3} alt="" /></div>
                <h3>Mason Doe</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae id rerum dolorum temporibus accusamus similique. Saepe cum omnis nisi praesentium voluptate doloremque magnam sequi.</p>
    */}

// import { Link } from 'react-router-dom';

export default class Testimonial  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
   <div className="testimonial">
                <div id="#carouselExample" class="carousel slide carousel-fade  mx-auto testimonial-carousel" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#carouselExample" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExample" data-slide-to="1"></li>
    <li data-target="#carouselExample" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active " interval={10}>
      <img class="d-block w-100"  src={background} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block col-md-8 mx-auto">
      <h4>What Our Customers Say</h4>
      <div class="img-area"> <img  src={background} alt="" /></div>
                <h3>Mason Doe</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae id rerum dolorum temporibus accusamus similique. Saepe cum omnis nisi praesentium voluptate doloremque magnam sequi.</p>
    </div>        
    </div>
    <div class="carousel-item" interval={10}>
      <img class="d-block w-100"  src={background} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block col-md-8 mx-auto">
      <h4>What Our Customers Say</h4>
      <div class="img-area"> <img  src={background} alt="" /></div>
                <h3>John Doe</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae id rerum dolorum temporibus accusamus similique. Saepe cum omnis nisi praesentium voluptate doloremque magnam sequi.</p>
    </div>  
    </div>
    <div class="carousel-item " interval={10}>
      <img class="d-block w-100" src={background} alt="Third slide"/> 
      <div class="carousel-caption d-none d-md-block mx-auto col-md-8">
      
      <h4>What Our Customers Say</h4>
      <div class="img-area"> <img src={background} alt="" /></div>
                <h3>Ariel Doe</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae id rerum dolorum temporibus accusamus similique. Saepe cum omnis nisi praesentium voluptate doloremque magnam sequi.</p>
    </div>  
    </div>
  </div>
           
  <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExample" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
          </div>
   </div>
        )
    }
}
