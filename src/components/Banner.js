import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap"
import {BsArrowRightCircle, BsChevronDoubleDown } from "react-icons/bs"
import headerImg from "../assets/img/imgcv.jpg"
import 'animate.css'



export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["UI/UX Designer", "Web Designer", "Frontend Developer", "Photographer"];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(10 - Math.random() * 100);
    const period = 1000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return (() => { clearInterval(ticker) });


    } )

    const tick = () => {
        let i = loopNum % toRotate.length;
        let full = toRotate[i];
        let updatedText = isDeleting ? full.substring(0, text.length - 1) : full.substring(0, text.length + 1);

        setText(updatedText);
        if (isDeleting) {
            setDelta(50);
        }

        if (!isDeleting && updatedText === full) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(200);
        }
    }
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my portfolio</span>
                        <h1>{'Hi, I am Guilherme Brás'} <span className="wrap">&#8203;{text}</span></h1>
                        <p>I´m a graduated student in Design and Multimedia at the Miguel Torga Institute</p>
                        <button onClick={() => window.open('https://www.linkedin.com/in/guilherme-br%C3%A1s-92719b290/', '_blank')}> Hire Me <BsArrowRightCircle /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5} >  
                       
                        <div >
                                <img src={headerImg} alt="Header" />
                        </div>
                              
                   
                    </Col>
                </Row>
                <Row className="text-center mt-1 ">
                    <Col>
                        <div className="scroll-indicator">
                            <h4>Scroll to learn more about me</h4>
                            <div className="down-arrows">
                                <BsChevronDoubleDown className="arrow-icon" />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>        
    )
}