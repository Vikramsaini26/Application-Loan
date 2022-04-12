import React from "react";
import {
  AboutWrapper,
  AboutContainer,
  AboutContentContainer,
  AboutContent,
  AboutContentHalf,
  AboutSlider,
  Slider,
  SliderNumber,
  SliderImg,
  AboutContentHead,
  AboutContentTitle,
  ContentPara,
  ImgWrapper,
  AboutText,
} from "../style/Homestyle/Aboutcss";
import leftarrow from "../assets/AboutAssest/leftarrow.png";
import rightarrow from "../assets/AboutAssest/rightarrow.png";
import stars from "../assets/AboutAssest/stars.png";

const About = () => {
  return (
    <>
      <AboutWrapper>
        <AboutContainer>
          <AboutContentContainer>
            <AboutSlider>
              <AboutText>What our customer says about us?</AboutText>
              <Slider>
                <SliderImg src={leftarrow} />
                <SliderNumber>1</SliderNumber>
                <SliderNumber>/</SliderNumber>
                <SliderNumber>3</SliderNumber>
                <SliderImg src={rightarrow} />
              </Slider>
            </AboutSlider>
            <AboutContent>
              <AboutContentHead>Lateef Mushtaq</AboutContentHead>
              <AboutContentTitle>Title here</AboutContentTitle>
              <ContentPara>
                Nisi vivamus neque elementum, at pharetra. Cras gravida congue
                in tincidunt neque, ipsum eiiAgestas. Duis risus ipsum dis
                commodo. Enim euismod velit amet volutpat egestas urna in eget
                pellentesque.
              </ContentPara>
              <ImgWrapper>
                <img src={stars} />
              </ImgWrapper>
            </AboutContent>
            <AboutContent>
              <AboutContentHead>Lateef Mushtaq</AboutContentHead>
              <AboutContentTitle>Title here</AboutContentTitle>
              <ContentPara>
                Nisi vivamus neque elementum, at pharetra. Cras gravida congue
                in tincidunt neque, ipsum eiiAgestas. Duis risus ipsum dis
                commodo. Enim euismod velit amet volutpat egestas urna in eget
                pellentesque.
              </ContentPara>
              <ImgWrapper>
                <img src={stars} />
              </ImgWrapper>
            </AboutContent>
            <AboutContentHalf></AboutContentHalf>
          </AboutContentContainer>
        </AboutContainer>
      </AboutWrapper>
    </>
  );
};

export default About;
