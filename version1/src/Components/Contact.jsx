import React, { useState, useRef, forwardRef } from 'react';
import emailjs from '@emailjs/browser';
import TrackVisibility from 'react-on-screen';
import contactSVG from "../Assets/img/Contact/contactSVG.svg";

export const Contact = forwardRef((props, ref) => {
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [message, setMessage] = useState('');
    const formRef = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if number contains only numeric characters
        if (!/^[\d\s()+-]*$/.test(number)) {
            alert('Please enter a valid phone number.');
            return;
        }

        emailjs.sendForm('service_lruy9xa', 'template_jro2edo', formRef.current, {
                publicKey: 'qAmbbJxm0DfTTKkkU',
            })
            .then(
                () => {
                    alert('Your message has been sucessfully sent!');
                    console.log('SUCCESS!');
                },
                (error) => {
                    alert('Please try again!');
                    console.log('FAILED...', error.text);
                },
            );

        setFname('');
        setLname('');
        setEmail('');
        setNumber('');
        setMessage('');
    };

    return (
        <div className='contact' ref={ref}>
            <div className='contactLeft'>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactSVG} alt="Contact Us" />
                    }
                </TrackVisibility>
            </div>

            <div className='contactRight'>
                <div className="contactRight_Top">
                    <h2>Get In Touch</h2>
                </div>

                <div className="contactRight_Content">
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input
                            type="text"
                            id="fname"
                            name='from_firstname'
                            value={fname}
                            placeholder="First Name"
                            onChange={(e) => setFname(e.target.value)}
                            required
                        />

                        <input
                            type="text"
                            id="lname"
                            name='from_lastname'
                            value={lname}
                            placeholder="Last Name"
                            onChange={(e) => setLname(e.target.value)}
                            required
                        />

                        <input
                            type="email"
                            id="email"
                            name='from_email'
                            value={email}
                            placeholder="Email Address"
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <input
                            type="tel"
                            id="number"
                            name='from_number'
                            value={number}
                            placeholder="Number"
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />

                        <textarea
                            rows="5"
                            id="message"
                            name='message'
                            value={message}
                            placeholder="Message"
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                        <button type="submit"><span>Submit</span></button>
                    </form>
                </div>
            </div>
        </div>
    );
});

export default Contact