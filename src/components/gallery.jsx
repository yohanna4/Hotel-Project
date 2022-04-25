import React, { Component } from 'react'
import jquery from 'jquery';

import room1 from '../images/Room (5).jpeg';
import gym1 from '../images/gym1.jpeg';
import gym2 from '../images/gym2.jpeg';
import bar from '../images/bar.jpeg';
import room2 from '../images/Room (3).jpeg';
import room3 from '../images/Room (4).jpeg';
import restaurant1 from '../images/Restaurant (1).jpeg';
import restaurant2 from '../images/Restaurant (2).jpeg';
import meeting from '../images/meeting.jpeg'

import { Link } from 'react-router-dom';


export default class GalleryComp extends Component{
  render() {       
    return (
      <div className=''>  
  
  <section>
    <div class="container">
        <div className="gallery-title col-md-12  text-center"> <h3>Photo Gallery</h3></div>
        <div class="row no-gutters">
            <div class="filtering col-sm-12 text-center">
                <span data-filter="*" class="active">All</span>
                <span data-filter=".Restaurant" class="">Restaurant</span>
                <span data-filter=".Rooms" class="">Rooms</span>
                <span data-filter=".Facilities" class="">Facilities</span>
            </div>
            <div class="col-12 text-center w-100">
                <div class="form-row gallery">
                    <div class="col-sm-6 col-lg-4 mb-2 Rooms">
                        <div class="gallery-wrapper">
                            <div class="gallery-image">
                                <img src={room1} alt="..." />
                            </div>
                            <div class="gallery-overlay">
                                <div class="gallery-content">
                                    <a class="popimg ml-0" href="#">
                                        <i class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"></i>
                                    </a>
                                    <h4>Suite Room</h4>
                                    {/* <p>[Facilities]</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 mb-2 Rooms">
                        <div class="gallery-wrapper">
                            <div class="gallery-image">
                                <img src={room2} alt="..." />
                            </div>
                            <div class="gallery-overlay">
                                <div class="gallery-content">
                                    <a class="popimg ml-0" href="#">
                                        <i class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"></i>
                                    </a>
                                    <h4>Twin Room</h4>
                                    {/* <p>[Rooms, Facilities]</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 mb-2 Facilities">
                        <div class="gallery-wrapper">
                            <div class="gallery-image">
                                <img src={gym1} alt="..." />
                            </div>
                            <div class="gallery-overlay">
                                <div class="gallery-content">
                                    <a class="popimg ml-0" href="#">
                                        <i class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"></i>
                                    </a>
                                    <h4>Gym</h4>
                                    {/* <p>[Restaurant]</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 mb-2 mb-lg-0 Restaurant">
                        <div class="gallery-wrapper">
                            <div class="gallery-image">
                                <img src={restaurant2} alt="..." />
                            </div>
                            <div class="gallery-overlay">
                                <div class="gallery-content">
                                    <a class="popimg ml-0" href="#">
                                        <i class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"></i>
                                    </a>
                                    <h4>Restaurant</h4>
                                    {/* <p>[Facilities]</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 mb-2 mb-sm-0 Rooms">
                        <div class="gallery-wrapper">
                            <div class="gallery-image">
                                <img src={room1} alt="..." />
                            </div>
                            <div class="gallery-overlay">
                                <div class="gallery-content">
                                    <a class="popimg ml-0" href="#">
                                        <i class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"></i>
                                    </a>
                                    <h4>Standard Room</h4>
                                    {/* <p>[Restaurant]</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 Rooms">
                        <div class="gallery-wrapper">
                            <div class="gallery-image">
                                <img src={room3} alt="..." />
                            </div>
                            <div class="gallery-overlay">
                                <div class="gallery-content">
                                    <a class="popimg ml-0" href="#">
                                        <i class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"></i>
                                    </a>
                                    <h4>Standard Room</h4>
                                    {/* <p>[Rooms]</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4   Restaurant">
                        <div class="gallery-wrapper">
                            <div class="gallery-image">
                                <img src={restaurant1} alt="..." />
                            </div>
                            <div class="gallery-overlay">
                                <div class="gallery-content">
                                    <a class="popimg ml-0" href="#">
                                        <i class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"></i>
                                    </a>
                                    <h4>Restaurant</h4>
                                    {/* <p>[Facilities]</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4  Facilities">
                        <div class="gallery-wrapper">
                            <div class="gallery-image">
                                <img src={gym2} alt="..." />
                            </div>
                            <div class="gallery-overlay">
                                <div class="gallery-content">
                                    <a class="popimg ml-0" href="#">
                                        <i class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"></i>
                                    </a>
                                    <h4>Gym</h4>
                                    {/* <p>[Restaurant]</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-sm-6 col-lg-4 Facilities">
                        <div class="gallery-wrapper">
                            <div class="gallery-image">
                                <img src={meeting} alt="..." />
                            </div>
                            <div class="gallery-overlay">
                                <div class="gallery-content">
                                    <a class="popimg ml-0" href="#">
                                        <i class="ti-zoom-in display-24 display-md-23 display-lg-22 display-xl-20"></i>
                                    </a>
                                    <h4>Meeting Room</h4>
                                    {/* <p>[Rooms]</p> */}
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
</section>

      </div>

    )}}


    