import React, { useState, useEffect } from 'react'
import TrackVisibility from 'react-on-screen';
import banner from "../Assets/img/header-img.svg";

function Home() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const [index, setIndex] = useState(1);
    const toRotate = ["Web Developer", "Web Designer"];
    const period = 2000;

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setIndex(prevIndex => prevIndex - 1);
            setDelta(period);
        }

        else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setIndex(1);
            setDelta(500);
        }

        else {
            setIndex(prevIndex => prevIndex + 1);
        }
    }

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text])

    return (
        <div className='home'>
            <div className='homeLeft'>
                <span id="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! My name is Atta, and I am a `}
                    <span className="txt-rotate" dataPeriod="1000" data-rotate='["Web Developer", "Web Designer"]'>
                        <span className="wrap">{text}</span>
                    </span>
                </h1>
                <p>
                    I thrive on crafting seamless and user-friendly experiences through the art and science of coding.
                    I specialize in front-end development, I love the challenge of making the web a better place.
                </p>
            </div>

            <div className='homeRight'>
                <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                            <img src={banner} alt="homeBanner" />
                        </div>}
                </TrackVisibility>
            </div>
        </div>
    )
}

export default Home