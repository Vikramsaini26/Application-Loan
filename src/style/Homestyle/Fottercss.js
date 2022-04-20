import styled from "styled-components";

export const FotterWrapper = styled.div`
  margin: 187px 0px;
  @media screen and (max-width: 1200px) {
    margin: 5px 20px;
  }
`;

export const FotterContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }
`;

export const ContentContainer = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 48px;
  line-height: 72px;
  text-align: center;
  text-transform: uppercase;
  color: #464040;
  display: flex;
  align-items: center;
  color: #363e98;

  @media screen and (max-width: 1200px) {
    font-size: 20px;
    display: flex;
    justify-content: center;
  }
`;

export const FooterContentText = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 60px;
  color: #464040;
  mix-blend-mode: normal;
  @media screen and (max-width: 1200px) {
    font-size: 16px;
  }
`;

export const TextContainer = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 38px;
  color: #464040;
  mix-blend-mode: normal;
  @media screen and (max-width: 1200px) {
    font-size: 12px;
  }
`;

export const Privacy = styled.div`
  cursor: pointer;
`;
