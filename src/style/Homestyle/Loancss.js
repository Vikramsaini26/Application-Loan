import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const LoanWrapper = styled.div`
  background: #f3fafb;
  border-radius: 8px;
  width: 100%;
  max-width: 1282px;
  margin-top: 210px;
  border: 1px solid #363b97;
`;

export const LoanHead = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

export const LoanHeadText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 140%;
  text-transform: capitalize;
  color: #464040;
`;

export const NeedsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(235px, 1fr));
  padding: 50px 100px;
  gap: 40px;
  margin-top: 95px;
`;

export const NeedText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  text-align: center;
  font-size: 24px;
  line-height: 36px;
  color: #464040;
`;

export const NeedItems = styled.div`
  width: 100%;
  max-width: 100px;
  height: 100px;
  background: #ffffff;
  border-radius: 25px;
  margin: 0 auto;
`;

export const ImgContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

export const NeedsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
