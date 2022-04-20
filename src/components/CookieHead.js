import React from "react";
import arrow from "../assets/CookiesAsset/arrowhome.png";
import {
  Head,
  ArrowImg,
  HeadText,
  Container,
} from "../style/Cookiestyle/cookieHeadcss";
import { useNavigate } from "react-router-dom";

const CookieHead = () => {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };

  return (
    <Head>
      <Container>
        <ArrowImg src={arrow} onClick={handleClick} />
        <HeadText onClick={handleClick}>Back to Home</HeadText>
      </Container>
    </Head>
  );
};

export default CookieHead;
