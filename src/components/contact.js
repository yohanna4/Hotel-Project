import React from "react";

function onClickButton(event) {
  event.preventDefault();
}

function ContactFrom() {
  return (
    <>

    <section className="page-section" id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading text-uppercase">Contact Us</h2>
              <h3 className="section-subheading contact-intro text-muted">We will get back to you as soon as we can</h3>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <form id="contactForm" name="sentMessage" novalidate="novalidate">
                <div className="row">
                  <div className="col-md-6">
                  <div className="form-group ">
                    {/* <label for="exampleFormControlInput1">Enter Full Name</label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Name"
                    />
                  </div>
                  <div className="form-group pt-3">
                    {/* <label for="exampleFormControlInput1">Email address</label> */}
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your E-mail "
                    />
                  </div>
                  <div className="form-group pt-3">
                    {/* <label for="exampleFormControlInput1">Contact Number</label> */}
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      placeholder="Enter Your Phone Number"
                    /></div>
                  </div>
                  <div className="col-md-6"> 
                {/* <label for="exampleFormControlTextarea1">
                  Type your Message Here
                </label> */}
               

                    <div className="form-group">
                    <textarea required="required"
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="7"
                  placeholder="Message"
                ></textarea>
                 {/* <textarea className="form-control" id="message" placeholder="Your Message " required="required" data-validation-required-message="Please enter a message."></textarea> */}
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                 
                  <div className="clearfix"></div>
              <div className="col-lg-12 text-center">
                <div id="success"></div>
                <button id="sendMessageButton" className="btn btn-outline-primary btn-xl text-uppercase" type="submit">Send Message</button>
              </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactFrom;

