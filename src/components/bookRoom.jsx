import React, { Component } from 'react'

import { Link } from 'react-router-dom';

export default class BookRoom  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
            <div className="container-fluid bookroom "> 
              <div id="booking" class="section ">
<div class="section-center">
    <div class="">
        <div class="row">
            <div class="booking-form">
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
    </div>
</div>
</div>
           </div>
        )
    }
}

