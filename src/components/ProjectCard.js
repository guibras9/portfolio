import { Col } from "react-bootstrap";
import {BsGithub} from "react-icons/bs"

export const ProjectCard = ({ title, description, imgUrl, repoUrl }) => {
  const cardStyle = {
    backgroundImage: `url(${imgUrl})`, // Defina a imagem como plano de fundo
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={cardStyle}>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br><br></br>
          <a href={repoUrl}><BsGithub className="icon"/></a>
        </div>
        
      </div>
    </Col>
  )
}