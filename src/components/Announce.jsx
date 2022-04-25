import React, { Component } from 'react'
import Room from './Room';
import Title from './Title'; 

import { Link } from 'react-router-dom';

export default class Announcement  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
            <div className="container-fluid annoucement"> 
            <section className="container annoucement">
                <Title  title="Announcement" />
                <div className="column">
                                <h3>WE ARE DELIGHTED TO ANNOUNCE OUR SPECIAL ROOM RATES!</h3>
                                <h5>AS A VALUED GUEST,YOU WILL RECIEVE A 25% DISCOUNT ON ALL ROOMS!</h5>
                                <Link to="/rooms" className="btn btn-primary">
                                   Our Rooms
                                 </Link>
                                 
                </div>
            </section></div>
        )
    }
}
