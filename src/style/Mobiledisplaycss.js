import styled from "styled-components";
import MobileDisplay from "../assets/DisplayAsset/Mobilebackground.png";

export const MobileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 230px;
`;

export const MobileImage = styled.img`
  background-image: url(${MobileDisplay});
`;

export const MobileContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MobileContentText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-transform: uppercase;
  color: #363e98;
`;

export const MobileImgText = styled.div`
  display: flex;
  gap: 15px;
`;

export const ApplyButton = styled.button`
  background: #363b97;
  border-radius: 8px;
  height: 60px;
  width: 188px;
  margin-top: 27px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  border: none;
`;
export const MobileText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  text-transform: capitalize;
  color: #464040;
`;
export const MobileSlide = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
