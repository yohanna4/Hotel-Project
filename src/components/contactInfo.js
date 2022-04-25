import React, { Component } from 'react'
import MapComponent from './map'
import { BsTelephoneFill } from "react-icons/bs";
import {MdEmail,MdOutlineLocationOn} from "react-icons/md"

function ContactInfo() {
    return (
      <>
            <div className="container-fluid contact-info"> 
            <div className="row">
                <div className="contact-details col-md-5 d-flex justify-content-center">
                    <div className="column ">
                       <div className="row "> 
                       <BsTelephoneFill />
                       <p>0114(345)(981)</p>
                       </div>
                       <div className="row "> 
                       <MdEmail />
                       <p>Marketing@kenenisahotel.com</p>
                       </div>
                       <div className="row "> 
                       <MdOutlineLocationOn />
                       <p>Cameroon St, Addis Ababa</p>
                       </div>
                        
                    </div>
                </div>
                <div className="map-container col-md-7 mx-auto">
              <MapComponent/>
                </div>
            </div>
           </div>
        </>
    )
}

export default ContactInfo;