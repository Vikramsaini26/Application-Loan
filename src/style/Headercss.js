import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 50px 80px;
`;

export const HeadLeft = styled.div``;

export const Head = styled.div`
  display: flex;
  gap: 30px;
`;

export const HeadContent = styled.div`
  font-family: Poppins, sans-serif;
  font-weight: 700;
  font-size: 30px;
  color: #363b97;
`;

export const Button = styled.button`
  background: #363b97;
  border-radius: 8px;
  border: none;
  color: #ffffff;
  font-size: 16px;
  font-family: "Poppins";
  cursor: pointer;
  padding: 11px 25px;
`;

export const WalletButton = styled.button`
  cursor: pointer;
  padding: 11px 25px;
  background: #fff;
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
`;

export const ButtonContent = styled.div`
  display: flex;
  gap: 5px;
`;

export const WalletImage = styled.img`
  height: 10px;
`;

export const SelectContainer = styled.div`
  display: flex;
  padding-top: 10px;
`;

export const SelectMain = styled.select`
  border: none;
  color: #363b97;
  font-size: 10px;
  font-weight: bold;
  align-items: center;
`;

export const SelectImg = styled.img`
  height: 17px;
  width: 17px;
`;
