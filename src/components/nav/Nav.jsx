import "./nav.scss";
import { NavLink } from "react-router-dom";
import account from '../../img/account.svg'
import heart from '../../img/heart.svg'
import cart from '../../img/cart.svg'

const  Navbar = () => {
 const activeLink = 'nav-list nav__items'
    return (
         <nav className="nav">
        <div className="container">
            <div className="nav-row">               
           
                <ul className="nav-list">
                <li className="nav__items orange"><a href="#home">Home</a></li>
                <li className="nav__items"><a href="#page">Page</a></li>
                <li className="nav__items"><a href="#shop">Shop</a></li>
                <li className="nav__items"><a href="#blog">Blog</a></li>
                <li className="nav__items"><a href="#contacts">Contacts</a></li>
                <li className="nav__items"><a href="#offers">Offers</a></li>               
              </ul>

              <div className="basket">
                <img src={account}/>
                <img src={heart}/>
                <button><img src={cart}/></button>
              
               </div>
         </div>
        </div>
    </nav>
    );
}

export default Navbar;