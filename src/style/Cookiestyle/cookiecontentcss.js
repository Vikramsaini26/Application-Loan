import styled from "styled-components";
export const Wrapper = styled.div`
  @media screen and (max-width: 1200px) {
    padding: 10px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 81px;
  @media screen and (max-width: 1200px) {
    gap: 10px;
    margin-top: 10px;
  }
`;

export const TextHead = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #363e98;
  @media screen and (max-width: 1200px) {
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
  @media screen and (max-width: 1200px) {
    font-size: 15px;
  }
`;
