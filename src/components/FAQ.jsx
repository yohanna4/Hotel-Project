

import React, { Component } from 'react'  
export default class FAQ  extends Component { 
    render() {       
        return (
            <div className="container-fluid faq">  
<div class="container-fluid" data-aos="fade-up">
 

    <div class="col-lg-10 mx-auto d-flex flex-column justify-content-center  ">

      <div class="content   mx-auto">
        <h3>Frequently Asked Questions </h3>
        
      </div>

      <div class="container">
    <div class="row">
        <div class="col-md-offset-1 col-md-12">
     <div class="panel-group" id="accordion" role="tablist" aria-multiselectable="true">

               <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingOne">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                            How do I get to know which facilities / services each hotel offers?
                                <span> </span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseOne" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingOne">
                        <div class="panel-body">
                            <p>Please, have a look at the section Hotel basic information. In this section you will also find the check in/out information. Hotel facilities / services are stated in Hotel basic information, just below the the offer of available rooms. In this section you will also find the check in/out information. Please note, that some of the facilities might be off-site and also for extra charge.</p> 
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingTwo">
                        <h4 class="panel-title">
                            <a class="collapsed" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            How do I book accommodation?
                                <span> </span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseTwo" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
                        <div class="panel-body">
                            <p>Booking is possible only by completing the reservation form on our web site. Please, select the dates of your stay and type of rooms you have chosen. The system will show you the price for the accommodation (always check the room conditions). If you agree with the total price and the booking conditions, just click on red button "Book now" and the reservation form will show up. Once you finish the order form and click on button "Book now", your reservation will be confirmed shorty to your email address.    </p> 
                        </div>
                    </div>
                </div>

                <div class="panel panel-default">
                    <div class="panel-heading" role="tab" id="headingThree">
                        <h4 class="panel-title">
                            <a class="collapsed last" role="button" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            How do I know that my reservation is confirmed?
                                <span> </span>
                            </a>
                        </h4>
                    </div>
                    <div id="collapseThree" class="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
                        <div class="panel-body">
                            <p>After completing and sending us your order form, you will get an automatic receipt e-mail containing your order number. Within 30 minutes, you will receive Accommodation confirmation. The Accommodation confirmation serves you as a voucher so please do not forget to print it out and take it with you as it contains all the vital details (address of your hotel, contact phone numbers and other instructions). In case that you requested in your order form any special requests – ie. extra bed, non smoking room, parking etc, please always double check with the hotel directly that they noted your request and are able to arrange it for you.

</p>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    </div>
</div>

    </div>

 


</div> 
           </div>
        )
    }
}
