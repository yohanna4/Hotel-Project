import React, { Component } from 'react'
import ReactDOM from "react-dom";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

 class MapComponent  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
            <div className=""  style={{ height: '8cm' }}> 
            <Map google={this.props.google} 
             initialCenter={{
                lat: 8.995419240553025,
                lng: 38.78860922614328
              }}
            zoom={14} 
            style={{ height: '7cm', width: '80%' }}>
 
 <Marker onClick={this.onMarkerClick}
         name={'Current location'} />

 <InfoWindow onClose={this.onInfoWindowClose}>
     {/* <div>
       <h1>{this.state.selectedPlace.name}</h1>
     </div> */}
 </InfoWindow>
</Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDCU6EySL8FU5TsY8QqG9YUoRaux7JaNy4")
  })(MapComponent)
//   8.995419240553025, 38.78860922614328