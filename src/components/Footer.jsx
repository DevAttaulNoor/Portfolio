import logo from '/images/universal/icon.png'
import socialIcon_Li from '../assets/svgs/linkedIn.svg'
import socialIcon_Fb from '../assets/svgs/facebook.svg'
import socialIcon_Gh from '../assets/svgs/github.svg'

export const Footer = ({ scrollToHome }) => {
    return (
        <div className="footer">
            <img
                src={logo}
                alt="Logo of AUN"
                onClick={scrollToHome}
                className="footerLeft"
            />

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