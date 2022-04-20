import styled from "styled-components";
export const Wrapper = styled.div`
  @media screen and (max-width: 1200px) {
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media screen and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (max-width: 1200px) {
    margin: 15px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Headtext = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #363e98;
  @media screen and (max-width: 1200px) {
    font-size: 15px;
  }
`;

export const Midtext = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 24px;
  color: #464040;
  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

export const Text = styled.div`
  @media screen and (max-width: 1200px) {
    font-family: "Open Sans";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 24px;
    color: #464040;
  }
`;
