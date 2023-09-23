import React from "react";
import logo from '../assets/logo.png'
import title from '../assets/title.png'
import SearchBar from "./SearchBar";
import premium from '../assets/premium.png'
import ringBell from '../assets/ring-bell.png'
import wishlist from '../assets/wishlist.png'
import profile from '../assets/profile.png'


const Header =()=>{



    return(
        <header className="header">
            <div className="left">
                <img src={logo} alt="logo" />
                <img src={title} alt="title" />
            </div>
            <div className="middle">
                <SearchBar/>
            </div>
            <div className="right">
                <img src={wishlist} alt="wishlist" />
                <img src={ringBell} alt="ringBell" />
                <img src={premium} alt="premium" />
                <img src={profile} alt="profile" />
                
            </div>
            
        </header>
    )
}

export default Header;