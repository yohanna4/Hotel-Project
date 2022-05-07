import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Services from './pages/Services';
import ScrollToTop from './components/ScrollToTop';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/swiper/swiper-bundle.min.css'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/rooms/" component={Rooms}/>
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/service" component={Services} />
          <Route component={Error}/>
        </Switch>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
