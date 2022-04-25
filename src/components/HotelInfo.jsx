import React, { Component } from 'react'
import Room from './Room';
import Title from './Title'; 

import { Link } from 'react-router-dom';

export default class HotelInfo  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
            <div className="container-fluid hotelInfo"> 
            <section className="container hotelInfo">
                <div className="column">
                                <h3>Where Hospitality is an Art</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reiciendis iste est odit a id deserunt perferendis voluptatem? Cum eveniet quaerat optio illo, totam beatae quibusdam soluta deserunt porro nobis.</p>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae reiciendis iste est odit a id deserunt perferendis voluptatem? Cum eveniet quaerat optio illo, totam beatae quibusdam soluta deserunt porro nobis.</p>
                                                              
                </div>
            </section></div>
        )
    }
}
