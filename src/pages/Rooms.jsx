import React from 'react'
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import RoomsContainer from '../components/RoomsContainer';
import hotel from '../images/room-6.jpeg';
import Accomodation from '../components/accomodation';
import AllRooms from '../components/allRooms';
import BookRoom from '../components/bookRoom';
const Rooms = () => {
    return (
    <div >
        {/* <Hero hero="roomsHero">
        </Hero>
        <Banner title="Available Rooms" subtitle="Best in Class Room">
                <Link to="/" className="btn btn-warning">
                      RETURN HOME
                </Link>
        </Banner> */}
        <div className='rooms-picture'><img src={hotel} alt="" /></div>
        
      <div className="col-md-12 row    acc-book">
          <div className="col-md-7 mx-auto">
          <Accomodation/> 
          </div>
           
           <div class="booking-form col-md-5 mx-auto  letsee">
                <form>
                    <div class="row no-margin">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <span class="form-label">Check In</span>
                                <input class="form-control" type="date" required/>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <span class="form-label">Check Out</span>
                                <input class="form-control" type="date" required/>
                            </div>
                        </div>
                    </div>
                    <div class="row no-margin">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <span class="form-label">Adults (18+)</span>
                                <select class="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                                <span class="select-arrow"></span>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <span class="form-label">Children (0-17)</span>
                                <select class="form-control">
                                    <option>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                </select>
                                <span class="select-arrow"></span>
                            </div>
                        </div>
                    </div>
                    <div class="form-group">
                        <span class="form-label">Room Type</span>
                        <select class="form-control" required>
                            <option value="" selected hidden>Select room type</option>
                            <option>Private Room (1 to 2 People)</option>
                            <option>Family Room (1 to 4 People)</option>
                        </select>
                        <span class="select-arrow"></span>
                    </div>
                    <div class="row no-margin">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <span class="form-label">Email</span>
                                <input class="form-control" type="email" placeholder="Enter your email"/>
                    </div>
                    </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                            <span class="form-label">Phone</span>
                                <input class="form-control" type="tel" placeholder="Enter your phone number"/>
                      
                            </div>
                        </div>
                    </div>
                    
                    <div class="form-btn">
                        <button class="submit-btn">Book Now</button>
                    </div>
                </form>
            </div>
         
      </div>
       
                
        <AllRooms/>
        <div className="white-space"></div>


        {/* <RoomsContainer/> */}
    </div>
    )
}

export default Rooms
