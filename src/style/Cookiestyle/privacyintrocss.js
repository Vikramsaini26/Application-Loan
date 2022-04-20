import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 80px;
  padding-top: 80px;
  padding-bottom: 80px;
  background: #f3fafb;
  display: flex;
  flex-direction: column;
  gap: 70px;
  @media screen and (max-width: 1200px) {
    margin-top: 30px;
    padding-top: 30px;
    gap: 20px;
    padding-bottom: 30px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 15px;
  @media screen and (max-width: 1200px) {
    margin: 6px;
  }
`;

export const Headingtext = styled.div`
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
export const Text = styled.div`
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #464040;
  @media screen and (max-width: 1200px) {
    font-size: 10px;
  }
`;
