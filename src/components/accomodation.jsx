import React, { Component } from 'react'
import Room from './Room';
import Title from './Title'; 

import { Link } from 'react-router-dom';

export default class Accomodation  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
            <div className="container-fluid accomodation"> 
            <section className="container accomodation">
                <div className="column">
                    <div className="text-center"><h3>Accomodation</h3></div>
                    <div className="row col-md-12">
                        <div class="vl2"></div>
                        <p>Each room is Equipped with High-tech Fire Protection system, Inbuilt Powerful Rainforest shower system, Double Glazed Windows that are sound proof. 100% of the hotel area is nonsmoking with a designated smoking area.
</p><p>Complimentary water in all rooms and safety box also feature in the range of conveniences provided. 24 hours room cleaning service, Room Service, amenities and tea /coffee maker in every room.</p>
                    </div>
                </div>
            </section></div>
        )
    }
}
