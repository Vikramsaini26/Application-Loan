import React from "react";
import {
  FotterWrapper,
  FotterContainer,
  ContentContainer,
  FooterContentText,
  TextContainer,
  Privacy,
} from "../style/Homestyle/Fottercss";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/privacy");
  };
  return (
    <FotterWrapper>
      <FotterContainer>
        <ContentContainer>
          <div>GOOD LOANS</div>
        </ContentContainer>
        <TextContainer>
          <FooterContentText>Company</FooterContentText>
          <div>About</div>
          <div>Testimonials</div>
          <Privacy onClick={handleClick}>Privacy policy</Privacy>
        </TextContainer>
        <TextContainer>
          <FooterContentText>Region</FooterContentText>
          <div>India</div>
        </TextContainer>
        <TextContainer>
          <FooterContentText>Help</FooterContentText>
          <div>Help Center</div>
          <div>Contact</div>
          <div>How it works</div>
        </TextContainer>
      </FotterContainer>
    </FotterWrapper>
  );
};

export default Footer;
