import styled from "styled-components";

export const AboutWrapper = styled.div`
  padding-top: 216px;
  @media screen and (max-width: 700px) {
    padding-top: 70px;
    margin: 10px;
  }
`;

export const AboutContainer = styled.div`
  max-width: 1440px;
  margin: 0px auto;

  display: flex;
  justify-content: flex-end;
  @media screen and (max-width: 700px) {
  }
`;

export const Main = styled.div`
  width: 100%;
  width: 1417px;
  height: 527px;
  background: #363b97;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AboutText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 140%;
  text-transform: capitalize;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  gap: 50px;

  @media screen and (max-width: 700px) {
    font-size: 16px;
  }
`;

export const Boxcontent = styled.div`
  background: #ffffff;
  border-radius: 8px;
  width: 100%;
  max-width: 365px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 31px 36px;
  @media screen and (max-width: 700px) {
    width: 260px;
  }
`;

export const Boxcontenttwo = styled.div`
  background: #ffffff;
  border-radius: 8px;
  width: 100%;
  max-width: 365px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 31px 36px;

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const Boxcontainer = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 700px) {
    display: flex;
  }
`;

export const Arrowcontainer = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Textcontainer = styled.div`
  width: 100%;
  max-width: 314px;
  @media screen and (max-width: 700px) {
  }
`;

export const Contenttext = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120%;
  color: #363e98;
  @media screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export const Titletext = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 140%;
  color: #464040;
  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;

export const Boxtext = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #464040;
  @media screen and (max-width: 700px) {
    font-size: 10px;
  }
`;
