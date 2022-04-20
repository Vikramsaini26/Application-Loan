import styled from "styled-components";

export const PartnerWrapper = styled.div`
  margin-top: 200px;
  @media screen and (max-width: 1200px) {
    margin: 50px;
  }
`;
export const Contentcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;
export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

export const PartnerContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const PartnersHead = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 140%;
  text-transform: capitalize;
  color: #363b97;
  @media screen and (max-width: 1200px) {
    font-size: 20px;
  }
`;

export const Containers = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const NiraImgContainers = styled.img`
  margin-bottom: 25px;
  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 263.76px;
    margin-bottom: 15px;
  }
`;

export const ShubhImgContainers = styled.img`
  @media screen and (max-width: 1200px) {
    height: 76.93px;
  }
`;

export const FulImgContainers = styled.img`
  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 400px;
  }
`;
