import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import projImg1 from "../Assets/img/project-img1.png";
import projImg2 from "../Assets/img/project-img2.png";
import projImg3 from "../Assets/img/project-img3.png";

export const Projects = () => {
    const smallprojects = [
        {
            title: "Calculator",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Weather Updates",
            description: "Design & Development",
            imgUrl: projImg2,
        },
        {
            title: "Movies LandingPage",
            description: "Design & Development",
            imgUrl: projImg3,
        },
    ];

    const mediumprojects = [
        {
            title: "Shipping Website",
            description: "Design & Development",
            imgUrl: projImg1,
        },
        {
            title: "Ecommerce Website",
            description: "Design & Development",
            imgUrl: projImg2,
        },
    ];

    const largeprojects = [
        {
            title: "Facebook Clone",
            description: "Design & Development",
            imgUrl: projImg1,
        },
    ];

    return (
        <section className="project" id="project">
            <Container>
                <Row>
                    <Col size={12}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                                    <h2>Projects</h2>
                                    <p>Explore my portfolio to see a showcase of my work. From e-commerce platforms to interactive web applications, each project reflects my commitment to quality and innovation.</p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">Small</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="second">Medium</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="third">Large</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        smallprojects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="second">
                                                <Row>
                                                    {
                                                        mediumprojects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>

                                            <Tab.Pane eventKey="third">
                                                <Row>
                                                    {
                                                        largeprojects.map((project, index) => {
                                                            return (
                                                                <ProjectCard
                                                                    key={index}
                                                                    {...project}
                                                                />
                                                            )
                                                        })
                                                    }
                                                </Row>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </Tab.Container>
                                </div>}
                        </TrackVisibility>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Projects;