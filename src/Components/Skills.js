import CircularProgressBar from "./CircularProgressBar";
import Carousel from 'react-multi-carousel';

import meter1 from "../Assets/img/meter1.svg";
import meter2 from "../Assets/img/meter2.svg";
import meter3 from "../Assets/img/meter3.svg";
// import arrow1 from "../Assets/img/arrow1.svg";
// import arrow2 from "../Assets/img/arrow2.svg";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const percentage = 100;

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <CircularProgressBar givenPer={80} />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <CircularProgressBar givenPer={80} />
                                    <h5>Web Designing</h5>
                                </div>
                                <div className="item">
                                    <CircularProgressBar givenPer={70} />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <CircularProgressBar givenPer={75} />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <CircularProgressBar givenPer={65} />
                                    <h5>JavaScript</h5>
                                </div>

                                {/* <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <img src={meter2} alt="Image" />
                                    <h5>Brand Identity</h5>
                                </div>
                                <div className="item">
                                    <img src={meter3} alt="Image" />
                                    <h5>Logo Design</h5>
                                </div>
                                <div className="item">
                                    <img src={meter1} alt="Image" />
                                    <h5>Web Designing</h5>
                                </div> */}
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;