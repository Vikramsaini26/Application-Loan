import React from "react";
import {
  ContentWrapper,
  ContentHead,
  ContentText,
  ContentImg,
  ContentButton,
  ButtonContainer,
} from "../style/contentcss";
import img3 from "../assets/ContentAsset/content1.png";

const Content = () => {
  return (
    <ContentWrapper>
      <ContentHead>
        <div>
          <ContentText>Loan upto 1,00,000 at your fingertips </ContentText>
        </div>
        <ButtonContainer>
          <ContentButton>Borrow now</ContentButton>
        </ButtonContainer>
      </ContentHead>
      <div>
        <div>
          <ContentImg src={img3} />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Content;
