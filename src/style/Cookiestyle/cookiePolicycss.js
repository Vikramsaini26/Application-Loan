import styled from "styled-components";
export const Main = styled.div`
  background: #f3fafb;
  @media only screen and (max-width: 1200px) {
  }
`;

export const Wrapper = styled.div`
  padding-top: 110px;
  padding-bottom: 82px;
  @media only screen and (max-width: 1200px) {
    padding: 17px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ContentText = styled.div`
  @media only screen and (max-width: 1200px) {
  }
`;

export const ContentImg = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 1200px) {
    height: 200px;
  }
`;

export const HeadText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #363e98;

  @media only screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const Text = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #464040;

  @media only screen and (max-width: 1200px) {
    font-size: 15px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 21px;
  @media only screen and (max-width: 1200px) {
    gap: 5px;
  }
`;
