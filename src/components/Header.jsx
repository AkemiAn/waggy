import React from "react";
import './header.scss'
import logo from '../img/logo.svg'
import loupe from '../img/loupe.svg'
import { IoIosSearch } from "react-icons/io";


const Header = () => {
    
    return (
        <header>
            <div className="container header__container">
              <img src={logo}alt="Logo" />
               <div className="search">
                <input type="search" placeholder="Search for more than 10,000 products" />
                <IoIosSearch />
               </div>
               <div className="header__little ">
                <p className="little__tittle">Phone</p>
                <p>+980-34984089</p>

               </div>
                <div className="email">
                    <p className="little__tittle">Email</p>
                    <p>waggy@gmail.com</p>
                
               </div>
            </div>
        </header>
    )
}

export default Header