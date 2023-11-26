import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
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
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
                            }
                        </TrackVisibility>
                    </Col>
                    <Col size={12} md={6}>
                        <h2>Get In Touch</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        id="fname"
                                        value={fname}
                                        placeholder="First Name"
                                        onChange={(e) => setFname(e.target.value)}
                                        required
                                    />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="text"
                                        id="lname"
                                        value={lname}
                                        placeholder="Last Name"
                                        onChange={(e) => setLname(e.target.value)}
                                        required
                                    />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="email"
                                        id="email"
                                        value={email}
                                        placeholder="Email Address"
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </Col>

                                <Col size={12} sm={6} className="px-1">
                                    <input
                                        type="tel"
                                        id="number"
                                        value={number}
                                        placeholder="Number"
                                        onChange={(e) => setNumber(e.target.value)}
                                        required
                                    />
                                </Col>

                                <Col size={12} className="px-1">
                                    <textarea
                                        rows="6"
                                        id="message"
                                        value={message}
                                        placeholder="Message"
                                        onChange={(e) => setMessage(e.target.value)}
                                        required
                                    />
                                    <button type="submit"><span>Submit</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Contact;