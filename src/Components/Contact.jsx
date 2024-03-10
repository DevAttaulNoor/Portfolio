import React, { useState } from 'react';
import TrackVisibility from 'react-on-screen';
import contactImg from "../Assets/img/contact-img.svg";

const Contact = () => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if number contains only numeric characters
        if (!/^[\d\s()+-]*$/.test(number)) {
            alert('Please enter a valid phone number.');
            return;
        }

        // Here you can implement the code to send the form data to a server or perform other actions
        console.log('Form submitted:', { fname, lname, email, number, message });
        // Clear form fields
        setFname('');
        setLname('');
        setEmail('');
        setNumber('');
        setMessage('');
    };

    return (
        <div className='contact'>
            <div className='contactLeft'>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                    }
                </TrackVisibility>
            </div>

            <div className='contactRight'>
                <div className="contactRight_Top">
                    <h2>Get In Touch</h2>
                </div>

                <div className="contactRight_Content">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="fname"
                            value={fname}
                            placeholder="First Name"
                            onChange={(e) => setFname(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            id="lname"
                            value={lname}
                            placeholder="Last Name"
                            onChange={(e) => setLname(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            id="email"
                            value={email}
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="tel"
                            id="number"
                            value={number}
                            placeholder="Number"
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />

                        <textarea
                            rows="5"
                            id="message"
                            value={message}
                            placeholder="Message"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <button type="submit"><span>Submit</span></button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Contact