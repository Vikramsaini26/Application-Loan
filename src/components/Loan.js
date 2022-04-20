import React from "react";
import {
  LoanWrapper,
  Container,
  Wrapper,
  LoanHead,
  LoanHeadText,
  NeedsWrapper,
  NeedsContainer,
  NeedText,
  NeedItems,
  ImgContainer,
  NeedImgContainer,
} from "../style/Homestyle/Loancss";
import travel from "../assets/NeedsAsset/travel.png";
import education from "../assets/NeedsAsset/education.png";
import wedding from "../assets/NeedsAsset/wedding.png";
import electronics from "../assets/NeedsAsset/electronics.png";
import credit from "../assets/NeedsAsset/credit.png";
import emergency from "../assets/NeedsAsset/emergency.png";
import medical from "../assets/NeedsAsset/medical.png";
import home from "../assets/NeedsAsset/home.png";

const Loan = () => {
  return (
    <Wrapper>
      <Container>
        <LoanWrapper>
          <LoanHead>
            <LoanHeadText>Few Personal loan Needs</LoanHeadText>
          </LoanHead>
          <NeedsWrapper>
            <NeedsContainer>
              <NeedItems>
                <ImgContainer>
                  <NeedImgContainer src={travel} />
                </ImgContainer>
              </NeedItems>
              <NeedText>Travel</NeedText>
            </NeedsContainer>
            <NeedsContainer>
              <NeedItems>
                <ImgContainer>
                  <NeedImgContainer src={education} />
                </ImgContainer>
              </NeedItems>
              <NeedText>Education</NeedText>
            </NeedsContainer>
            <NeedsContainer>
              <NeedItems>
                <ImgContainer>
                  <NeedImgContainer src={wedding} />
                </ImgContainer>
              </NeedItems>
              <NeedText>wedding</NeedText>
            </NeedsContainer>
            <NeedsContainer>
              <NeedItems>
                <ImgContainer>
                  <NeedImgContainer src={electronics} />
                </ImgContainer>
              </NeedItems>
              <NeedText>Electronics</NeedText>
            </NeedsContainer>
            <NeedsContainer>
              <NeedItems>
                <ImgContainer>
                  <NeedImgContainer src={credit} />
                </ImgContainer>
              </NeedItems>
              <NeedText>Credit card</NeedText>
            </NeedsContainer>
            <NeedsContainer>
              <NeedItems>
                <ImgContainer>
                  <NeedImgContainer src={emergency} />
                </ImgContainer>
              </NeedItems>
              <NeedText>Emergency</NeedText>
            </NeedsContainer>
            <NeedsContainer>
              <NeedItems>
                <ImgContainer>
                  <NeedImgContainer src={medical} />
                </ImgContainer>
              </NeedItems>
              <NeedText>Medical Emergency</NeedText>
            </NeedsContainer>
            <NeedsContainer>
              <NeedItems>
                <ImgContainer>
                  <NeedImgContainer src={home} />
                </ImgContainer>
              </NeedItems>
              <NeedText>Home Renovation</NeedText>
            </NeedsContainer>
          </NeedsWrapper>
        </LoanWrapper>
      </Container>
    </Wrapper>
  );
};

export default Loan;
