import React from "react";
import { Container } from "react-bootstrap";
import {
  LinkedInLogoIcon,
  GitHubLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

export const Footer = () => {
    return (
      <Container>
        <div className="footer">
          <div className="footer-content">
            {/* Coluna Esquerda */}
            <div className="footer-column">
              <p style={{ color: "#5f6368" }}>All rights reserved ® Guillherme Brás
              </p>
            </div>
            
            {/* Coluna Central */}
            <div className="footer-column">
              <h3 className="text-xl font-bold text-white text-center">
               
              </h3>
            </div>
            
            {/* Coluna Direita */}
            <div className="footer-column ">
             
              <div className="text-center">
                <a
                  href="mailto:guibras.business@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center text-white hover:underline transition duration-150 ease-in-out"
                >
                  <EnvelopeClosedIcon className="mr-1 w-4 h-4" />
                  guibras.business@gmail.com
                </a>
              </div>
              
              <div className="text-center">
                <a
                  href="https://www.linkedin.com/in/guilherme-br%C3%A1s-92719b290/"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 flex items-center text-white hover:underline transition duration-150 ease-in-out"
                >
                  <LinkedInLogoIcon className="mr-1 w-4 h-4" />
                  LinkedIn
                </a>
                </div>
                <div className="text-center">
                <a
                  href="https://github.com/guibras9"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 text-white hover:underline transition duration-150 ease-in-out"
                >
                  <GitHubLogoIcon className="mr-1 w-4 h-4" />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  };
