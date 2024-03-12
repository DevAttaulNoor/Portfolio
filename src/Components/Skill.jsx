import React from 'react'
import Carousel from 'react-multi-carousel';
import Circularbar from './Circularbar';

export const Skill = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 3
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='skill'>
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
    )
}

export default Skill