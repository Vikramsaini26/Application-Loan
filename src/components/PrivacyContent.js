import React from "react";
import {
  Container,
  Wrapper,
  TextContainer,
  ImgContainer,
  Headtext,
  Midtext,
  Text,
} from "../style/Cookiestyle/privacycontentcss";
import traced from "../assets/CookiesAsset/traced.png";

const PrivacyContent = () => {
  return (
    <Wrapper>
      <Container>
        <TextContainer>
          <Headtext>Privacy Policy</Headtext>
          <Midtext>
            This Privacy Policy describes how Goodloans and its affiliates
            (collectively, the ‘Goodloan’ or ‘we’ or ‘us’ or ‘our’) collect, use
            and disclose information about you and what choices you have with
            respect to your information.
          </Midtext>
          <Text>
            Your privacy is really important to us, so whether you’re new to
            Goodlaon or a long-time user, please take the time to get to know
            our practices. We have made some updates to the format of this
            Privacy Policy to help you more easily find information. Our privacy
            practices have remained the same. Our previous privacy policy is
            available here. We have kept this simple to make it easy to
            understand, but if you are not familiar with any terms in this
            Privacy Policy, please reach out to us.
          </Text>
        </TextContainer>
        <ImgContainer>
          <img src={traced} />
        </ImgContainer>
      </Container>
    </Wrapper>
  );
};

export default PrivacyContent;
