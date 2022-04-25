import React, { Component } from 'react'
import Title from './Title'; 

import pic1 from '../images/Room (1).jpeg';
import pic2 from '../images/Room (3).jpeg';
import pic3 from '../images/Room (4).jpeg';
import pic4 from '../images/Room (5).jpeg';
import pic5 from '../images/Room (6).jpeg';
import { Link } from 'react-router-dom';
export default class AllRooms  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
            <div className="container-fluid allrooms"> 
            <div className="column">
                <div className="row one-room">
                    <div className='col-md-5 room-description text-center'>
                        <h2>Standard room</h2>
                        <p>Our spacious Standard room with absolute suitable amenities, Includes one king-size bed, a seating area, satellite television HD, mini bar, coffee maker, hairdryer, iron and ironing board, and Wired and wireless Internet access.</p>
                        <h4 className='button mx-auto'>55 dollars</h4>                       
                        
                    </div>
                    <div className='col-md-5 room-picture'>
                        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                            <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div class="carousel-inner">
                            <div class="carousel-item active  carousel-item-room " interval={7}>
                                <img class="d-block w-100" src={pic1} alt="First slide"/>
                                <div class="carousel-caption d-none d-md-block ">
                                
                                </div>
                            </div>
                            <div class="carousel-item carousel-item-room"  interval={7}>
                                <img class="d-block w-100" src={pic5} alt="Second slide"/>
                                <div class="carousel-caption d-none d-md-block">
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
                    </div> 
                </div>
                <div className="hr"></div>
                <div className="row two-room">
                    <div className='col-md-5 room-picture'>
                        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                            <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div class="carousel-inner">
                            <div class="carousel-item active  carousel-item-room " interval={7}>
                                <img class="d-block w-100" src={pic4} alt="First slide"/>
                                <div class="carousel-caption d-none d-md-block ">
                                
                                </div>
                            </div>
                            <div class="carousel-item carousel-item-room"  interval={7}>
                                <img class="d-block w-100" src={pic3} alt="Second slide"/>
                                <div class="carousel-caption d-none d-md-block">
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
                    </div> 
                    <div className='col-md-5 room-description text-center '>
                        <h2>Suite room</h2>
                        <p>Luxurious and welcoming living room with seating area TV and specious bedroom connected to it; completed amenities, private balconies, bathtub, king-size bed, satellite television, mini-bar, coffee maker, hairdryer, iron and ironing board, and Internet access.
</p>
                        <h4 className='button mx-auto'>55 dollars</h4>                     
                       
                         </div>
                </div> <div className="hr"></div>
                <div className="row one-room">
                    <div className='col-md-5 room-description text-center '>
                        <h2>Corner King</h2>
                        <p>Providing the ultimate luxury accommodation, bathtub to relax in. The outdoor terrace features a dining area for 2, a seating area with captivating a pleasing view of the city, including satellite television HD, Wired, and wireless Internet access.</p>
                        <h4 className='button mx-auto'>55 dollars</h4>                       
                        </div>
                    <div className='col-md-5 room-picture'>
                        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                            <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div class="carousel-inner">
                            <div class="carousel-item active  carousel-item-room " interval={5}>
                                <img class="d-block w-100" src={pic5} alt="First slide"/>
                                <div class="carousel-caption d-none d-md-block ">
                                
                                </div>
                            </div>
                            <div class="carousel-item carousel-item-room"  interval={5}>
                                <img class="d-block w-100" src={pic4} alt="Second slide"/>
                                <div class="carousel-caption d-none d-md-block">
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
                    </div> 
                </div> <div className="hr"></div>
                <div className="row two-room">
                    <div className='col-md-5 room-picture'>
                        <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-ride="carousel">
                            <ol class="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            </ol>
                            <div class="carousel-inner">
                            <div class="carousel-item active  carousel-item-room " interval={200}>
                                <img class="d-block w-100" src={pic2} alt="First slide"/>
                                <div class="carousel-caption d-none d-md-block ">
                                
                                </div>
                            </div>
                            {/* <div class="carousel-item carousel-item-room"  interval={200}>
                                <img class="d-block w-100" src={pic3} alt="Second slide"/>
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                            </div> */}
                            
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
                    </div> 
                    <div className='col-md-5 room-description text-center '>
                        <h2>Twin room</h2>
                        <p>Our spacious twin room is complete with two double beds and suitable amenities. Each room has a balcony, satellite television HD, mini bar, coffee maker, hair dryer, iron and ironing board, and Wired and wireless Internet access.</p>
                        <h4 className='button mx-auto'>55 dollars</h4>                       
                          </div>
                </div>
            </div>
           </div>
        )
    }
}
