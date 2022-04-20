import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const LoanWrapper = styled.div`
  background: #f3fafb;
  border-radius: 8px;
  border: 1px solid #363b97;
  padding-bottom: 182px;
  @media screen and (max-width: 700px) {
    margin: 10px;
    padding-bottom: 50px;
  }
`;

export const LoanHead = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
  @media screen and (max-width: 700px) {
    margin-top: 50px;
  }
`;

export const LoanHeadText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 140%;
  text-transform: capitalize;
  color: #363e98;
  @media screen and (max-width: 700px) {
    font-size: 20px;
  }
`;

export const NeedsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  padding: 50px 100px;
  gap: 40px;
  margin-top: 95px;
  @media screen and (max-width: 700px) {
    padding: 0px 0px;
    margin-top: 50px;
    gap: 10px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const NeedText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  color: #464040;
  @media screen and (max-width: 700px) {
    font-size: 8px;
    line-height: 10px;
  }
`;

export const NeedItems = styled.div`
  width: 100%;
  max-width: 100px;
  height: 100px;
  background: #ffffff;
  border-radius: 25px;
  margin: 0 auto;
  @media screen and (max-width: 700px) {
    width: 100%;
    max-width: 70px;
    height: 70px;
  }
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
  @media screen and (max-width: 700px) {
    padding-top: 25px;
  }
`;

export const NeedsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const NeedImgContainer = styled.img`
  @media screen and (max-width: 700px) {
    height: 25px;
    width: 25px;
  }
`;
