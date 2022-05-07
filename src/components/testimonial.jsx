import React, { Component } from 'react' 
import background from '../images/background (2).jpg';
import face1 from '../images/face (2).jpg';
import face2 from '../images/face (1).jpg';
import face3 from '../images/face (3).jpg';

{/* <div class="img-area"> <img  src={pic3} alt="" /></div>
                <h3>Mason Doe</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae id rerum dolorum temporibus accusamus similique. Saepe cum omnis nisi praesentium voluptate doloremque magnam sequi.</p>
    */}

// import { Link } from 'react-router-dom';

export default class Testimonial  extends Component {
    // static contextType = RoomContext;
    render() {       
        return (
   <div className="testimonial">
       <section id="testimonials" class="testimonials">

<div class="col-md-10 mx-auto" data-aos="fade-up">

  <header class="section-header">
    <h2>Testimonials</h2>
  </header>

  <div class="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="200">
    <div class="swiper-wrapper">

      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="stars">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <div class="profile mt-auto">
            <img src={face1} class="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
          </div>
          <p>
          We thoroughly enjoyed our stay. The staffs were always motivated to help us. The food was excellent, the chef ensured that our pallet needs were met. The hotel ambience was lovely & very serene. We look forward to coming back.  </p>
          
        </div>
      </div>

      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="stars">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <div class="profile mt-auto">
            <img src={face3} class="testimonial-img" alt=""/>
            <h3>Jenna Goodman</h3>
          </div>
          <p>
          Had a very relaxed stay. Great service amazing Spa. Lovely building, calming greenery, serene lake. What more could one ask for? We will be back again hopefully.  </p>
          
        </div>
      </div>

      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="stars">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <div class="profile mt-auto">
            <img src={face1} class="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
          </div>
          <p>
          The food was excellent, the chef ensured that our pallet needs were met. The hotel ambience was lovely & very serene. We look forward to coming back.    </p>
          
        </div>
      </div>

      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="stars">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <div class="profile mt-auto">
            <img src={face3} class="testimonial-img" alt=""/>
            <h3>Jenna Goodman</h3>
          </div>
          <p>
          Had a very relaxed stay. Great service amazing Spa. Lovely building, calming greenery, serene lake. What more could one ask for? We will be back again hopefully.  </p>
          
        </div>
      </div>

      <div class="swiper-slide">
        <div class="testimonial-item">
          <div class="stars">
            <i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>
          </div>
          <div class="profile mt-auto">
            <img src={face1} class="testimonial-img" alt=""/>
            <h3>Saul Goodman</h3>
          </div>
          <p>
          The food was excellent, the chef ensured that our pallet needs were met. The hotel ambience was lovely & very serene. We look forward to coming back.    </p>
          
        </div>
      </div>

    </div>
    <div class="swiper-pagination"></div>
  </div>

</div>

</section>
                {/* <div id="#carouselTestimonial" class=" carousel slide carousel-fade  mx-auto testimonial-carousel" data-ride="carousel">
            <ol class="carousel-indicators">
            <li data-target="#carouselTestimonial" data-slide-to="0" class="active"></li>
    <li data-target="#carouselTestimonial" data-slide-to="1"></li>
    <li data-target="#carouselTestimonial" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active " interval={5}>
      <img class="d-block w-100"  src={background} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block col-md-8 mx-auto">
      <h4>What Our Customers Say</h4>
      <div class="img-area"> <img  src={face1} alt="" /></div>
                <h3>Mason Doe</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae id rerum dolorum temporibus accusamus similique. Saepe cum omnis nisi praesentium voluptate doloremque magnam sequi.</p>
    </div>        
    </div>
    <div class="carousel-item" interval={5}>
      <img class="d-block w-100"  src={background} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block col-md-8 mx-auto">
      <h4>What Our Customers Say</h4>
      <div class="img-area"> <img  src={face2} alt="" /></div>
                <h3>John Doe</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae id rerum dolorum temporibus accusamus similique. Saepe cum omnis nisi praesentium voluptate doloremque magnam sequi.</p>
    </div>  
    </div>
    <div class="carousel-item " interval={5}>
      <img class="d-block w-100" src={background} alt="Third slide"/> 
      <div class="carousel-caption d-none d-md-block mx-auto col-md-8">
      
      <h4>What Our Customers Say</h4>
      <div class="img-area"> <img src={face3} alt="" /></div>
                <h3>Ariel Doe</h3>
							<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum molestiae id rerum dolorum temporibus accusamus similique. Saepe cum omnis nisi praesentium voluptate doloremque magnam sequi.</p>
    </div>  
    </div>
  </div>
           
  <a class="carousel-control-prev" href="#carouselTestimonial" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselTestimonial" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
          </div> */}
   </div>
        )
    }
}
