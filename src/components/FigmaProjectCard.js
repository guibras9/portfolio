import { Col } from "react-bootstrap";
import { FaFigma } from "react-icons/fa";

export const FigmaProjectCard = ({ title, description, imgUrl, repoUrl }) => {
  const cardStyle = {
    backgroundImage: `url(${imgUrl})`, // Defina a imagem como plano de fundo
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" style={cardStyle}>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span><br></br><br></br>
          <a href={repoUrl}><FaFigma className="icon"/></a>
        </div>
        
      </div>
    </Col>
  )
}