import React from 'react'
import reactDom from 'react-dom';
import { Link } from 'react-router-dom';
import Slider from '../components/slider';
import Announcement from '../components/Announce';
import About from '../components/about.jsx';
import ContactFrom from '../components/contact.js'
import Service from '../components/Service.jsx'
import Testimonial from '../components/testimonial'

// import Footer from '../components/footerr.js'

import 'bootstrap/dist/css/bootstrap.css';
export default function Home() {
    return (
        < >
        <div className="home-body">
        <Slider/>

       
        <Service/> 
        <About/>
        <Testimonial/>
        <ContactFrom/></div>
        </>

    )
}
