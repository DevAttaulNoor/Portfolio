import React from 'react'
import logo from '../Assets/img/Logo/logo.png';
import socialIcon_Li from "../Assets/img/Footer/SocialIcons/linkedIn.svg";
import socialIcon_Gh from "../Assets/img/Footer/SocialIcons/github.svg";
import socialIcon_Fb from "../Assets/img/Footer/SocialIcons/facebook.svg";

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footerLeft">
                <img src={logo} alt="Logo" />
            </div>

            <div className="footerRight">
                <div className="socialIcons">
                    <a href="https://www.linkedin.com/in/atta-ul-noor-2aa7a1236/" target="_blank" rel="noreferrer"> <img src={socialIcon_Li} alt="" /> </a>
                    <a href="https://github.com/DevAttaulNoor" target="_blank" rel="noreferrer"> <img src={socialIcon_Gh} alt="" /> </a>
                    <a href="https://www.facebook.com/AttaulNoor.2001/" target="_blank" rel="noreferrer"> <img src={socialIcon_Fb} alt="" /> </a>
                </div>
                <p>Copyright 2024. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default Footer;