import React from 'react'
import { FaFacebookSquare, FaLinkedin } from 'react-icons/fa';
import { IoLogoYoutube } from 'react-icons/io';
import { AiFillInstagram } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer id="sticky-footer" className="footer text-white-50">
            <div className="container  ">
                <div className='column'>
                    
                    <div className="row footer-info">
                        {/* <div className="col-lg-4 col-sm-4 ms-5 mx-auto">
                            <img src={"./yoly.jpeg"} alt="logo" />
                            {/* <h2>YOLY ADDIS HOTEL</h2>
                            <h5>Mickey Leland Street</h5>
                            <h6>Addis Ababa, Ethiopia</h6>
                        </div> */}
                        <div class="col-lg-4 col-md-6 col-12">
					<div class="widget widegt_about">
						<div class="widget_title">
							
                        <h4>Kenenisa Hotel</h4>
						</div>
						
						<p>Quisque orci nisl, viverra et sem ac, tincidunt egestas massa. Morbi est arcu, hendrerit ac vehicula condimentum, euismod nec tortor praesent consequat urna.</p>
						
                         <small>
                    <a href="https://www.facebook.com/">
                                    <FaFacebookSquare className="connect text-white" width="25" /></a>  
                                    <a href="https://www.instagram.com/">
                                    <AiFillInstagram className="connect text-white" /></a>
                                <a href="https://www.youtube.com/channel/UCDGDXevsQo67KVkmjrd9ruQ?view_as=subscriber">
                                    <IoLogoYoutube className="connect text-white" /></a>
                                </small> 
					</div>
				</div>
                <div class="col-lg-4 col-md-6 col-sm-12">
					<div class="widget widget_link">
						<div class="widget_title">
							<h4>Quick Links</h4>
						</div>
							<h6><a href="/rooms">Rooms</a></h6>
							<h6><a href="/service">Services</a></h6>
							<h6><a href="/gallery">Gallery</a></h6>
							<h6><a href="/contact">Contact</a></h6>
					</div>
				</div>
                <div class="col-lg-4 col-md-6 col-sm-12">
					<div class="widget widget_contact">
						<div class="widget_title">
							<h4>Contact Us</h4>
						</div>
						<div class="contact_info">
                                    <h6>TEl 0114(345)(981)</h6>
                                    <h6>FAX 0114(248)(590)</h6>
                                    <h6>P.O Box 9760</h6>
						</div>
					</div></div> 
                               
                                {/* <div className=" col-lg-4 col-sm-4 footer-contact">
                                <h3 className='footer-contact text-white '>CONTACT  US</h3> 
                                    <h6>TEl 0114(345)(981)</h6>
                                    <h6>FAX 0114(248)(590)</h6>
                                    <h6>P.O Box 9760</h6>
                                </div> */}

                               
                           
                        </div>


                    {/* <div className="row footer-copyright">
                        <div className="col-md-6 col-12 my-auto">
                            <small>Copyright &copy;Kenenisa Hotel</small>
                        </div>
                        <div className="col-md-6 col-12">
                            <div className="d-flex float-right">
                                <a href="https://www.facebook.com/">
                                    <FaFacebookSquare className="connect text-white" /></a>                               
                                <a href="https://www.instagram.com/">
                                    <AiFillInstagram className="connect text-white" /></a>
                                <a href="https://www.youtube.com/channel/UCDGDXevsQo67KVkmjrd9ruQ?view_as=subscriber">
                                    <IoLogoYoutube className="connect text-white" /></a>
                            </div>
                        </div>
                    </div> */}
                    {/* <div class="row justify-content-center mt-0 pt-0 row-1 mb-0 px-sm-3 px-2">
            <div class="col-12">
                <div class="row my-4 row-1 no-gutters">
                    <div class="col-sm-3 col-auto text-center"><small>&#9400; Stride Softwere</small></div>
                    <div class="col-md-3 col-auto "></div>
                    <div class="col-md-3 col-auto"></div>
                    <div class="col my-auto text-md-left text-right "> 
                    <small>
                    <a href="https://www.facebook.com/">
                                    <FaFacebookSquare className="connect text-white" width="25" /></a>  
                                    <a href="https://www.instagram.com/">
                                    <AiFillInstagram className="connect text-white" /></a>
                                <a href="https://www.youtube.com/channel/UCDGDXevsQo67KVkmjrd9ruQ?view_as=subscriber">
                                    <IoLogoYoutube className="connect text-white" /></a>
                                </small> 
                                </div>
                </div>
            </div>
        </div> */}
<div class="copyright_area">
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
					<div class="copyright_text">
						<p>Copyright &copy; 2020 All rights reserved.</p>
					</div>
				</div>
			</div>
		</div>
	</div>
                </div>
            </div>
        </footer>
    )
}
export default Footer