import styled from "styled-components";

export const Wrapper = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
  }
`;

export const CalculatorWrapper = styled.div`
  position: relative;
  bottom: 215px;
  background: linear-gradient(180deg, #363b97 0%, #454bb6 79.34%, #363b97 100%);
  border: 2px solid #ffffff;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
  border-radius: 8px;
  width: 100%;
  max-width: 1200px;
  height: 947px;

  /* margin-top: 210px; */
  @media only screen and (max-width: 600px) {
    display: flex;
    justify-content: center;
    background: linear-gradient(
      180deg,
      #363b97 0%,
      #454bb6 79.34%,
      #363b97 100%
    );
    border: 2px solid #ffffff;
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    width: 100%;
    max-width: 1200px;
    height: 947px;
  }
`;

export const CalculatorHead = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 140%;
  text-transform: capitalize;
  color: #ffffff;
  padding-top: 70px;
`;

export const CalculatorInput = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 65px;
`;

export const HeadContent = styled.div`
  display: flex;
  justify-content: center;
`;

export const InputContent = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #ffffff;
`;

export const SliderInput = styled.input`
  background: #ffffff;
  border: 0.2px solid #83d1d8;
  box-sizing: border-box;
  box-shadow: inset 0px 24px 24px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  width: 400px;
  height: 10px;
`;
export const InputButton = styled.div`
  background: linear-gradient(180deg, #363b97 0%, #454bb6 79.34%, #363b97 100%);
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 200px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 36px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
`;
export const InputMonth = styled.div`
  width: 401px;
  height: 53px;
  background: #fafafa;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #4046ac;
`;

export const BorderInput = styled.div`
  width: 100%;
  max-width: 967.5px;
  border: 1.3px solid #ffffff;
`;

export const BorderWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 115px;
`;

export const AmountWrapper = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-evenly;
`;
export const AmountContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 80px;
`;

export const AmountContentText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  letter-spacing: 0.01em;
  color: #83d1d8;
`;

export const AmountContentNumber = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: #ffffff;
`;

export const ApplyButton = styled.button`
  width: 100%;
  max-width: 291px;
  height: 64px;
  background: #ffffff;
  border: 1px solid #eae9f2;
  border-radius: 10px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  color: #363b97;
  cursor: pointer;
`;

export const ApplyButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 100px;
`;
