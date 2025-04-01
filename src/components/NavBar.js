import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { SiInstagram } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaFigma } from "react-icons/fa";
import logo from "../assets/img/logo.png";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (

    <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="/">
          <img src= {logo} alt="Logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('about')}>About</Nav.Link>
            <Nav.Link href="#experience" className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('experience')}>Experience</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>

          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/guilherme-br%C3%A1s-92719b290/" target="_blank" rel="noreferrer"><FaLinkedinIn className="icon" /></a>
              <a href="https://github.com/guibras9" target="_blank" rel="noreferrer"><FiGithub className="icon" /></a>
              <a href="https://www.figma.com/@guilhermebras" target="_blank" rel="noreferrer"><FaFigma className="icon" /></a>
              <a href="https://www.instagram.com/lenscapemonotony/" target="_blank" rel="noreferrer"><SiInstagram className="icon" /></a>
              
            </div>

            <button className="vvd" onClick={() => window.location.href = "mailto:guibras.business@gmail.com"}>
                <span>Contact Me</span>
            </button>

          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}