import React from 'react'
import GalleryComp from '../components/gallery'

import gallery from '../images/gallery.jpg';
const Gallery = () => {
    return (
    <div>
        {/* <div className='Gallery-header text-center d-flex justify-content-center'><h3>Gallery</h3></div> */}
     
        <div className='rooms-picture'><img src={gallery} alt="" /></div>
      <GalleryComp/>
      <br />
    </div>
    )
}

export default Gallery
