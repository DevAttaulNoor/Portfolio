import React, { useState, useEffect, forwardRef, useCallback, useMemo } from 'react';
import TrackVisibility from 'react-on-screen';
import homebanner from "../Assets/img/Home/homeSVG.svg";

export const Home = forwardRef((props, ref) => {
    const [text, setText] = useState('');
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;
    const toRotate = useMemo(() => ["Web Developer", "Web Designer"], []);

    const tick = useCallback(() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }, [isDeleting, loopNum, text, toRotate, period]);

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text, delta, tick]);

    return (
        <div className='home' ref={ref}>
            <div className='homeLeft'>
                <span id="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Atta a `}
                    <span className="txt-rotate" data-rotate='["Web Developer", "Web Designer"]'>
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
                            <img src={homebanner} alt="homeBanner" />
                        </div>}
                </TrackVisibility>
            </div>
        </div>
    );
});

export default Home;
