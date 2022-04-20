import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 212px 300px;
  @media only screen and (max-width: 1200px) {
    padding: 50px 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Contentcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  @media only screen and (max-width: 700px) {
  }
`;
export const MaintextWrapper = styled.div`
  width: 100%;
  max-width: 280px;
  @media only screen and (max-width: 700px) {
  }
`;

export const Maintext = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-transform: uppercase;
  color: #363e98;

  @media only screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export const Imgwrapper = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 700px) {
  }
`;

export const Applybutton = styled.button`
  background: #363b97;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  padding: 18px 50px;
  border: none;
  @media only screen and (max-width: 700px) {
    padding: 8px 30px;
    font-size: 10px;
  }
`;

export const CoinWrapper = styled.div`
  display: flex;
  gap: 10px;
  @media only screen and (max-width: 700px) {
  }
`;

export const Coincontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media only screen and (max-width: 700px) {
  }
`;
