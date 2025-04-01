
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import { FigmaProjectCard } from "./FigmaProjectCard";

import imgProject2 from "../assets/img/project1.png";
import imgProject1 from "../assets/img/project3.png";
import imgProject3 from "../assets/img/project2.png";
import imgProject4 from "../assets/img/project4.png";
import imgProject5 from "../assets/img/project5.png";


export const Projects = () => {
    const projects = [
        {
          title: "Streamflix",
          description: "This projetct was created in my first programming subject when i was doing my Design and Multimedia Degree",
          imgUrl:imgProject1 ,
          repoUrl:"https://github.com/guibras9/Streamflix" ,
        },
        {
          title: "2GamerGuys",
          description: "This was another project created when i was taking my Degree using React.Js",
          imgUrl: imgProject2 ,
          repoUrl:"https://github.com/guibras9/2GamerGuys",
        },
        {
            title: "Laboratório Da Mente",
            description: "This was my Final Project in my Desgin and Multimedia Degree using Python and Django Framework",
            imgUrl:imgProject3,
            repoUrl:"https://github.com/guibras9/LaboratorioDaMente",
          },
      ];

      const figmaprojects = [
        {
            title: "Laboratório Da Mente",
            description: "This was my Final Project in my Desgin and Multimedia Degree using Python and Django Framework",
            imgUrl:imgProject3,
            repoUrl:"https://www.figma.com/design/o5BfucKkTwW3jIo1X2l1S8/Projeto-Final?node-id=0-1&t=8X8AX67rZ0Uct8FC-1",
          },
          {
            title: "NShape",
            description: "This was an academic web design Project ",
            imgUrl:imgProject4,
            repoUrl:"https://www.figma.com/design/nVdVCLBoZfsDSDjGsK9dnF/NShape?m=auto&t=InoQZEFkWve98Uj8-1",
          },
          {
            title: "Polesitter",
            description: "This was an academic web design Project ",
            imgUrl:imgProject5,
            repoUrl:"https://www.figma.com/design/6oR8KzvXDQBHfQhNKK7Bff/Polesitter?m=auto&t=GfSYcsrM5zhskWMl-1",
          },
      ];


    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12}>
                        
                                <div>
                                    <h2>Projects</h2>
                                    <p>In this section you will find some personal and academic projects that i have developed over the years </p>
                                    <Tab.Container id="projects-tabs" defaultActiveKey="first">
                                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                            <Nav.Item>
                                                <Nav.Link eventKey="first">WEB APPS</Nav.Link>
                                            </Nav.Item>
                                            
                                            <Nav.Item>
                                                <Nav.Link eventKey="third"> DESIGN PROTOTYPES</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                        <Tab.Content >
                                            <Tab.Pane eventKey="first">
                                                <Row>
                                                    {
                                                        projects.map((project, index) => {
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
                                                        figmaprojects.map((project, index) => {
                                                            return (
                                                                <FigmaProjectCard
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
                                </div>
                        
                    </Col>
                </Row>
            </Container>

        </section>
    )
}
