import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import TrackVisibility from 'react-on-screen';
import smallprojImg1 from "../Assets/img/Projects/calculator.PNG"
import smallprojImg2 from "../Assets/img/Projects/weatherApp.PNG"
import smallprojImg3 from "../Assets/img/Projects/movies_landingPage.PNG"
import smallprojImg4 from "../Assets/img/Projects/todo.png"
import mediumprojImg1 from "../Assets/img/Projects/ecom_website.PNG"
import mediumprojImg2 from "../Assets/img/Projects/shiping_website.PNG"
import largeprojImg1 from "../Assets/img/Projects/fbclone.PNG"

export const Projects = () => {
    const smallprojects = [
        {
            title: "Calculator",
            description: "Design & Development",
            imgUrl: smallprojImg1,
        },
        {
            title: "Weather Updates",
            description: "Design & Development",
            imgUrl: smallprojImg2,
        },
        {
            title: "Movies LandingPage",
            description: "Design & Development",
            imgUrl: smallprojImg3,
        },
        {
            title: "Todo",
            description: "Design & Development",
            imgUrl: smallprojImg4,
        },
    ];

    const mediumprojects = [
        {
            title: "Ecommerce Website",
            description: "Design & Development",
            imgUrl: mediumprojImg1,
        },
        {
            title: "Shipping Website",
            description: "Design & Development",
            imgUrl: mediumprojImg2,
        },
    ];

    const largeprojects = [
        {
            title: "Facebook Clone",
            description: "Development",
            imgUrl: largeprojImg1,
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
                                        <Nav variant="pills" className="mb-5 nav-pills justify-content-center align-items-center" id="pills-tab">
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