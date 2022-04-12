import React from "react";
import {
  LoanWrapper,
  Wrapper,
  LoanHead,
  LoanHeadText,
  NeedsWrapper,
  NeedsContainer,
  NeedText,
  NeedItems,
  ImgContainer,
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
      <LoanWrapper>
        <LoanHead>
          <LoanHeadText>Few Personal loan Needs</LoanHeadText>
        </LoanHead>
        <NeedsWrapper>
          <NeedsContainer>
            <NeedItems>
              <ImgContainer>
                <img src={travel} />
              </ImgContainer>
            </NeedItems>
            <NeedText>Travel</NeedText>
          </NeedsContainer>
          <NeedsContainer>
            <NeedItems>
              <ImgContainer>
                <img src={education} />
              </ImgContainer>
            </NeedItems>
            <NeedText>Education</NeedText>
          </NeedsContainer>
          <NeedsContainer>
            <NeedItems>
              <ImgContainer>
                <img src={wedding} />
              </ImgContainer>
            </NeedItems>
            <NeedText>wedding</NeedText>
          </NeedsContainer>
          <NeedsContainer>
            <NeedItems>
              <ImgContainer>
                <img src={electronics} />
              </ImgContainer>
            </NeedItems>
            <NeedText>Electronics</NeedText>
          </NeedsContainer>
          <NeedsContainer>
            <NeedItems>
              <ImgContainer>
                <img src={credit} />
              </ImgContainer>
            </NeedItems>
            <NeedText>Credit card</NeedText>
          </NeedsContainer>
          <NeedsContainer>
            <NeedItems>
              <ImgContainer>
                <img src={emergency} />
              </ImgContainer>
            </NeedItems>
            <NeedText>Emergency</NeedText>
          </NeedsContainer>
          <NeedsContainer>
            <NeedItems>
              <ImgContainer>
                <img src={medical} />
              </ImgContainer>
            </NeedItems>
            <NeedText>Medical Emergency</NeedText>
          </NeedsContainer>
          <NeedsContainer>
            <NeedItems>
              <ImgContainer>
                <img src={home} />
              </ImgContainer>
            </NeedItems>
            <NeedText>Home Renovation</NeedText>
          </NeedsContainer>
        </NeedsWrapper>
      </LoanWrapper>
    </Wrapper>
  );
};

export default Loan;
