
import React from "react";
import './gallery.scss'
import gallery1 from '../../img/gallery1.jpg'
import gallery2 from '../../img/gallery2.png'
import gallery3 from '../../img/gallery3.png'
import gallery4 from '../../img/gallery4.jpg'
import gallery5 from '../../img/gallery5.jpg'
import gallery6 from '../../img/gallery6.png'


const Gallery = () => {
    return (    
       <section class="gallery" id="page">
      <div class="gallery__grid">
     
      <img src={gallery1}/>
      <img src={gallery2}/>
      <img src={gallery3}/>
      <img src={gallery4}/>
      <img src={gallery5}/>
      <img src={gallery6}/>
     
      </div>
    </section>

  
    )
}

export default Gallery
