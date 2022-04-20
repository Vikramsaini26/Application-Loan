import React from "react";
import {
  AboutWrapper,
  AboutContainer,
  Main,
  AboutText,
  Boxcontent,
  Boxcontainer,
  Arrowcontainer,
  Textcontainer,
  Boxcontenttwo,
  Contenttext,
  Titletext,
  Boxtext,
} from "../style/Homestyle/Aboutcss";
import leftarrow from "../assets/AboutAssest/leftarrow.png";
import rightarrow from "../assets/AboutAssest/rightarrow.png";
import stars from "../assets/AboutAssest/stars.png";

const About = () => {
  return (
    <AboutWrapper>
      <AboutContainer>
        <Main>
          <AboutText>
            <Textcontainer>
              <div>What our customer says about us?</div>
            </Textcontainer>
            <Arrowcontainer>
              <div>
                <img src={leftarrow} />
              </div>
              <div>1/4</div>
              <div>
                <img src={rightarrow} />
              </div>
            </Arrowcontainer>
          </AboutText>
          <Boxcontainer>
            <Boxcontent>
              <Contenttext>Lateef Mushtaq</Contenttext>
              <Titletext>Title here</Titletext>
              <Boxtext>
                Nisi vivamus neque elementum, at pharetra. Cras gravida congue
                in tincidunt neque, ipsum eiiAgestas. Duis risus ipsum dis
                commodo. Enim euismod velit amet volutpat egestas urna in eget
                pellentesque.
              </Boxtext>
              <div>
                <img src={stars} />
              </div>
            </Boxcontent>
            <Boxcontenttwo>
              <Contenttext>Lateef Mushtaq</Contenttext>
              <Titletext>Title here</Titletext>
              <Boxtext>
                Nisi vivamus neque elementum, at pharetra. Cras gravida congue
                in tincidunt neque, ipsum eiiAgestas. Duis risus ipsum dis
                commodo. Enim euismod velit amet volutpat egestas urna in eget
                pellentesque.
              </Boxtext>
              <div>
                <img src={stars} />
              </div>
            </Boxcontenttwo>
          </Boxcontainer>
        </Main>
      </AboutContainer>
    </AboutWrapper>
  );
};

export default About;
