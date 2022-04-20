import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 46px 79px;
  @media screen and (max-width: 1200px) {
    padding: 20px 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 1200px) {
    display: flex;
    align-items: center;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
  @media screen and (max-width: 1200px) {
    gap: 40px;
  }
`;

export const Heading = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  text-transform: uppercase;
  color: #363b97;
  @media screen and (max-width: 1200px) {
    font-size: 18px;
  }
`;

export const ApplicationButton = styled.button`
  background: #363b97;
  border-radius: 4px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #ffffff;
  border: none;
  cursor: pointer;
  @media screen and (max-width: 1200px) {
    font-size: 10px;
    height: 31px;
  }
`;
export const AffindiButton = styled.button`
  border: 1.5px solid #363b97;
  border-radius: 8px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #363b97;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
export const SelectButton = styled.select`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  border: none;
  color: #363b97;
`;

export const SelectButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 100px;
  gap: 21px;
  @media screen and (max-width: 1200px) {
    margin-top: 5px;
    gap: 10px;
  }
`;

export const ModalText = styled.div`
  height: 88px;
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 22px;
  text-align: center;
  color: #464040;
  @media screen and (max-width: 1200px) {
    font-size: 13px;
  }
`;

export const ButtonContainer1 = styled.div`
  display: flex;
  gap: 5px;
`;

export const AcceptButton = styled.div`
  background: #363b97;
  border-radius: 8px;
  width: 108px;
  height: 48px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 80px;
    height: 38px;
  }
`;
export const DeclineButton = styled.div`
  width: 108px;
  height: 48px;
  left: 743px;
  top: 403px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #363b97;
  border: 1px solid #363b97;
  box-sizing: border-box;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1200px) {
    width: 80px;
    height: 38px;
  }
`;

export const ButtonContainerModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 1200px) {
    margin-top: 60px;
    gap: 10px;
  }
`;
