import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 100px;
  padding: 135px 80px 0px;
  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const ContentText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #363e98;
`;

export const BorrowButton = styled.button`
  width: 145px;
  height: 48px;
  background: #363b97;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  border: none;
`;
export const ContentMAin = styled.div`
  max-width: 544px;
  display: flex;
  flex-direction: column;
  gap: 82px;
`;
