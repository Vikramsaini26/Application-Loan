import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 2400px;
  height: 412px;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    display: flex;
    flex-direction: column;
    height: 612px;
  }
`;

export const CookieText = styled.div`
  display: flex;
  flex-direction: column;
  padding: 110px 80px;
  gap: 21px;
  background: #f3fafb;
`;

export const ContentText = styled.div`
  width: 100%;
  max-width: 685px;
  height: 72px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  color: #464040;
`;

export const Text = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #363e98;
`;

export const ImgContainer = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  color: #363e98;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  background: #f3fafb;
`;

export const Image = styled.img`
  width: 315px;
  height: 249px;
`;
