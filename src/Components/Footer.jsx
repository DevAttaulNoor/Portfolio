import React from 'react'
import logo from '../Assets/img/Logo/logo.png';
import navIcon1 from "../Assets/img/nav-icon1.svg";
import navIcon2 from "../Assets/img/nav-icon2.svg";
import navIcon3 from "../Assets/img/nav-icon3.svg";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLeft">
                <img src={logo} alt="Logo" />
            </div>

            <div className="footerRight">
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/atta-ul-noor-2aa7a1236/" target="_blank"> <img src={navIcon1} alt="" /> </a>
                    <a href="https://github.com/DevAttaulNoor" target="_blank"> <img src={navIcon3} alt="" /> </a>
                    <a href="https://www.facebook.com/AttaulNoor.2001/" target="_blank"> <img src={navIcon2} alt="" /> </a>
                </div>
                <p>Copyright 2024. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;