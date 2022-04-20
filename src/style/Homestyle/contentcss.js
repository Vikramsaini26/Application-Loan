import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 135px;
  /* padding: 135px 0px; */
  @media screen and (max-width: 1200px) {
    /* padding: 0px 0px; */
    padding-top: 0px;
    margin-bottom: 30px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;

  @media screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    border: 2px blue;
    gap: 10px;
  }
`;

export const Contenttext = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #363e98;
  @media screen and (max-width: 1200px) {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    color: #363e98;
  }
`;

export const Borrowbutton = styled.button`
  background: #363b97;
  border-radius: 8px;
  width: 120px;
  height: 48px;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 20px;
  text-align: center;
  color: #ffffff;
  @media screen and (max-width: 1200px) {
    font-size: 10px;
    height: 30px;
    border-radius: 4px;
    width: 80px;
  }
`;

export const Contentcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const Imgcontainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 612px;
`;

export const Buttoncontainer = styled.div`
  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Imgwrapper = styled.div`
  position: relative;
  padding-bottom: min(5.07vw, 73px);
  padding-right: min(1.95vw, 29px);
  height: auto;
  margin: 0px auto;
  @media screen and (max-width: 1200px) {
    margin-left: 10px;
    margin-right: 10px;
  }
`;

export const Imgone = styled.img`
  position: relative;
  z-index: 1;
  width: min(42.5vw, 612px);
  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 300px;
  }
`;
export const Imgtwo = styled.img`
  position: absolute;
  width: min(13.61vw, 196px);
  left: min(2.6vw, 37px);
  bottom: 0px;
  z-index: 1;

  @media screen and (max-width: 1200px) {
    width: 100%;
    max-width: 100px;
  }
`;
export const Imgthree = styled.img`
  position: absolute;
  right: 0px;
  bottom: min(3vw, 42px);
  width: min(32.64vw, 470px);

  @media screen and (max-width: 1200px) {
    right: 0px;
    width: 100%;
    max-width: 200px;
  }
`;

export const Containerthree = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  text-align: center;

  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
  }
`;

export const Containerpayment = styled.div`
  border-left: 1px solid #e2e2e2;
  border-right: 1px solid #e2e2e2;
  height: 40px;
  padding-left: 20px;
  padding-right: 20px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #464040;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    font-size: 11px;
    line-height: 18px;
  }
`;

export const ContainerCharges = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #464040;
  @media screen and (max-width: 1200px) {
    font-size: 11px;
    line-height: 18px;
  }
`;

export const Containerrequire = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  text-transform: capitalize;
  color: #464040;

  @media screen and (max-width: 1200px) {
    font-size: 11px;
    line-height: 18px;
  }
`;

export const BottomContainer = styled.div`
  @media screen and (min-width: 1190px) {
    display: none;
  }
`;
