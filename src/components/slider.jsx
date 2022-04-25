import React, { Component } from 'react'
import Room from './Room';
import Title from './Title'; 
import pic1 from '../images/slide (2).jpeg';
import pic2 from '../images/slide (3).jpeg';
import pic3 from '../images/restaurant.jpeg';
import pic4 from '../images/room.jpeg';

import { Link } from 'react-router-dom';

export default class Slider  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
            <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active  " interval={300}>
                <img class="d-block w-100" src={pic4} alt="First slide"/>
                <div class="carousel-caption d-none d-md-block ">
                    <h5>Welcome to</h5><h5> Kenenisa Hotel Plus</h5>
                </div>
              </div>
              <div class="carousel-item"  interval={200}>
                <img class="d-block w-100" src={pic2} alt="Second slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Welcome to</h5><h5> Kenenisa Hotel Plus</h5>
                </div>
              </div>
              <div class="carousel-item" interval={200}>
                <img class="d-block w-100" src={pic3} alt="Third slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>We invite you to our Restaurant</h5>                  
                    <p> <Link to="/service" className="btn btn-primary">
                     Learn More
                </Link></p>
                </div>
              </div>
              <div class="carousel-item" interval={200}>
                <img class="d-block w-100" src={pic1} alt="Fourth slide"/>
                <div class="carousel-caption d-none d-md-block">
                    <h5>Luxurious Rooms</h5>                  
                    <p> <Link to="/rooms" className="btn btn-primary">
                      Our Rooms
                </Link></p>
                </div>
              </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        )
    }
}
