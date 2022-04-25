import React from 'react';
import {NavLink} from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
import {BsSearch} from 'react-icons/bs'
import jquery from 'jquery';
import { Form,Button } from 'bootstrap';
import logo from "../images/logo.png"

// for changing navbar  color
jquery(window).scroll(function() {
jquery('nav').toggleClass('scrolled', jquery(this).scrollTop() > 0);
})

const Navbar = () => {
    return (
    <>
       <nav className="navbar navbar-expand-sm bg-transparent  py-2 fixed-top">   {/*bg-transparent */}
            <div className="container-fluid ">
                {/* <span className="navbar-brand font-weight-bolder">Kenenisa Hotel</span> */}
                <img className="navbar-logo" src={logo} alt="Kenenisa Hotel Plus" />
                <a href="void(0)" className="navbar-toggler border-0" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <FaAlignRight className="nav-icon" /></span>
                </a>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/">Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/rooms">Rooms</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/service">Services</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/gallery">Gallery</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" activeClassName="active_class" exact to="/contact">Contact</NavLink>
                        </li>
                         {/* <li className="nav-item input-group">
                
                            <BsSearch/> 
                            <input type="text" class="form-control " placeholder="Search"  />
                                <div class="input-group-append ">
                                    <button class="btn btn-outline-secondary btn-sm" type="button">Search</button>
                                </div>
                        </li>
                        */}
                       
                    </ul>
                </div>
            </div>
        </nav>
    </>
    );
}
export default Navbar;