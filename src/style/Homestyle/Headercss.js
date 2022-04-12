import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 46px 80px;
  display: flex;
  justify-content: space-between;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 19px;
`;
export const HeadText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  text-align: center;
  text-transform: uppercase;
  color: #363b97;
`;

export const ApplicationButton = styled.button`
  width: 268px;
  height: 48px;
  background: #363b97;
  border-radius: 8px;
  border: none;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  text-transform: capitalize;
  color: #ffffff;
  cursor: pointer;
`;

export const WalletButton = styled.button`
  width: 187px;
  height: 48px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  @media only screen and (max-width: 1200px) {
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
  color: #363b97;
  border: none;
  outline: invert;
  cursor: pointer;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 1200px) {
    display: none;
  }
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 56px 100px;
  gap: 21px;
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
`;

export const ButtonContainer = styled.div`
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
`;
