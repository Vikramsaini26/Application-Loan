import React from "react";
import {
  Wrapper,
  CookieText,
  ContentText,
  Text,
  ImgContainer,
  Image,
} from "../style/Cookiestyle/cookiePolicycss";
import cookiegroup from "../assets/CookiesAsset/cookiegroup.png";
const CookiePolicy = () => {
  return (
    <Wrapper>
      <CookieText>
        <Text>Cookie Policy</Text>
        <ContentText>
          Our cookie policy explains our principles when it comes to the
          collection, processing, and storage of your information. This policy
          specifically explains how we, our partners, and users of our services
          deploy cookies, as well as the options you have to control them.
        </ContentText>
      </CookieText>
      <ImgContainer>
        <Image src={cookiegroup} />
      </ImgContainer>
    </Wrapper>
  );
};

export default CookiePolicy;
