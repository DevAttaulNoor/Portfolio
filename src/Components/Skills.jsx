import CircularProgressBar from "./CircularProgressBar";
import Carousel from 'react-multi-carousel';

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

    return (
        <section className="skill" id="skills">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="skill-bx wow zoomIn">
                            <h2>Skills</h2>
                            <p>
                                My toolkit includes languages like HTML, CSS, JavaScript, and proficiency in frameworks such as React.js.
                                <br></br>I'm always on the lookout for the latest technologies to stay at the forefront of web development trends.
                            </p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <CircularProgressBar givenPer={75} />
                                    <h5>Web Development</h5>
                                </div>
                                <div className="item">
                                    <CircularProgressBar givenPer={80} />
                                    <h5>Web Designing</h5>
                                </div>
                                <div className="item">
                                    <CircularProgressBar givenPer={80} />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                    <CircularProgressBar givenPer={80} />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                    <CircularProgressBar givenPer={70} />
                                    <h5>JavaScript</h5>
                                </div>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills;