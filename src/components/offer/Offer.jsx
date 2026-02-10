
import React from "react";
import './offer.scss'
import decor from '../../img/decor.svg'


const Offer = () => {
    return (    
 <section className="offer" id="offers">
     
    <img src={decor}/>
      <div className="offer__title">Get <span class="text_accent">20% Off</span> on <br/>first Purchase
      </div>
      <form className="offer__form">
        <input type="email" placeholder="your email address"/>
        <input type="text" placeholder="your Full Name"/>
        <input type="text" placeholder="Message"/>
        <button type="submit">Send Message</button>
      </form>
      <div className="paws">
      <img src={decor} />       
       </div>
    </section>
  
    )
}

export default Offer
