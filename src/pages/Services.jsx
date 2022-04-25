import React from 'react'
import Service from '../components/Service';
import MoreService from '../components/MoreService';

import bar from '../images/bar.jpeg';

const Services = () => {
    return (
    <div>
         <div className='rooms-picture'><img src={bar} alt="" /></div>
       <Service/>
       <MoreService />
    </div>
    )
}

export default Services
