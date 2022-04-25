import React from 'react'
import ContactFrom from '../components/contact.js'
import ContactInfo from '../components/contactInfo.js'
import bar from '../images/bar.jpeg';

    
const Contact = () => {
return (
<>

<div className='rooms-picture'><img src={bar} alt="" /></div>
     <ContactInfo/>
   <ContactFrom/>
</>
)
}
export default Contact