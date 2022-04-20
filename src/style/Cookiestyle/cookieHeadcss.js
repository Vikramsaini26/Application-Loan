import styled from "styled-components";

export const Head = styled.div`
  padding: 55px 80px;
  @media screen and (max-width: 1200px) {
    padding: 0px 0px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  gap: 7px;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ArrowImg = styled.img`
  width: 16px;
  height: 13.99px;
  padding-top: 5px;
`;

export const HeadText = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #464040;
`;
