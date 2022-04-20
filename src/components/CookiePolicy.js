import React from "react";
import {
  Wrapper,
  Container,
  Main,
  ContentText,
  ContentImg,
  HeadText,
  Text,
  TextContainer,
} from "../style/Cookiestyle/cookiePolicycss";
import cookiegroup from "../assets/CookiesAsset/cookiegroup.png";
const CookiePolicy = () => {
  return (
    <Main>
      <Wrapper>
        <Container>
          <ContentText>
            <TextContainer>
              <HeadText>Cookie Policy</HeadText>
              <Text>
                Our cookie policy explains our principles when it comes to the
                collection, processing, and storage of your information. This
                policy specifically explains how we, our partners, and users of
                our services deploy cookies, as well as the options you have to
                control them.
              </Text>
            </TextContainer>
          </ContentText>
          <ContentImg>
            <img src={cookiegroup} />
          </ContentImg>
        </Container>
      </Wrapper>
    </Main>
  );
};

export default CookiePolicy;
