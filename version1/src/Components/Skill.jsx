import React, { forwardRef } from 'react'
import Carousel from 'react-multi-carousel';
import Circularbar from './Circularbar';

export const Skill = forwardRef((props, ref) => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 2000, min: 1200 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 1200, min: 950 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 950, min: 680 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 680, min: 480 },
            items: 1
        },
        smallMobile: {
            breakpoint: { max: 480, min: 260 },
            items: 1
        }
    };

    return (
        <div className='skill' ref={ref}>
            <div className="skill_Box wow zoomIn">
                <h2>Skills</h2>
                <p>My toolkit includes HTML, CSS, JavaScript, and proficiency in frameworks such as React.js. I'm always on the lookout for the latest technologies to stay at the forefront of web development trends.</p>

                <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill_Slider">
                    <div className="item">
                        <Circularbar givenPer={80} />
                        <h5>Web Development</h5>
                    </div>
                    <div className="item">
                        <Circularbar givenPer={80} />
                        <h5>Web Designing</h5>
                    </div>
                    <div className="item">
                        <Circularbar givenPer={85} />
                        <h5>HTML</h5>
                    </div>
                    <div className="item">
                        <Circularbar givenPer={85} />
                        <h5>CSS</h5>
                    </div>
                    <div className="item">
                        <Circularbar givenPer={75} />
                        <h5>JavaScript</h5>
                    </div>
                    <div className="item">
                        <Circularbar givenPer={75} />
                        <h5>ReactJs</h5>
                    </div>
                    <div className="item">
                        <Circularbar givenPer={75} />
                        <h5>Redux</h5>
                    </div>
                </Carousel>
            </div>
        </div>
    );
});

export default Skill