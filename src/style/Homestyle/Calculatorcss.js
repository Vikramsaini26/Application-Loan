import styled from "styled-components";

export const Wrapper = styled.div`
  padding-top: 209px;
  background: linear-gradient(
    rgb(242, 243, 248) 0%,
    rgb(242, 243, 248) 36%,
    rgb(242, 243, 248) 36%,
    white 36%,
    white 100%
  );

  @media only screen and (max-width: 700px) {
    padding-top: 70px;
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 100px;
  @media only screen and (max-width: 700px) {
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const CalculatorWrapper = styled.div`
  background: linear-gradient(180deg, #363b97 0%, #454bb6 79.34%, #363b97 100%);
  border: 2px solid #ffffff;
  margin: 0 auto;
  width: 100%;
  max-width: 1200px;
  box-shadow: 0px 4px 20px rgb(0 0 0 / 10%);
  border-radius: 8px;
  @media only screen and (max-width: 700px) {
    padding: 10px 10px;
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
  margin: 70px 430px;
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const CalculatorInput = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 70px;
  margin: 70px 117px;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 0px;
    margin: 10px 10px;
  }
`;

export const HeadContent = styled.div`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputContent = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  letter-spacing: 0.01em;
  color: #ffffff;
  @media only screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export const SliderInput = styled.input`
  background: #ffffff;
  border: 0.2px solid #83d1d8;
  box-sizing: border-box;
  box-shadow: inset 0px 24px 24px rgba(0, 0, 0, 0.06);
  border-radius: 30px;
  width: 400px;
  height: 10px;

  @media only screen and (max-width: 700px) {
    width: 150px;
    height: 5px;
  }
`;
export const InputButton = styled.div`
  background: linear-gradient(180deg, #363b97 0%, #454bb6 79.34%, #363b97 100%);
  border: 1px solid #ffffff;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  width: 300px;
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
  @media only screen and (max-width: 1200px) {
    width: 100%;
    font-size: 10px;
  }
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
  @media only screen and (max-width: 700px) {
    display: none;
  }
`;

export const BorderInput = styled.div`
  width: 100%;
  max-width: 967.5px;
  border: 1.3px solid #ffffff;
`;

export const BorderWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const AmountWrapper = styled.div`
  padding-top: 80px;
  display: flex;
  justify-content: space-evenly;
  @media only screen and (max-width: 700px) {
    gap: 150px;
    padding-top: 0px;
  }
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
  @media only screen and (max-width: 700px) {
    font-size: 12px;
  }
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
  @media only screen and (max-width: 700px) {
    font-size: 15px;
  }
`;

export const ApplyButton = styled.button`
  width: 100%;
  max-width: 291px;
  height: 50px;
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
  @media only screen and (max-width: 700px) {
    font-size: 10px;
    height: 30px;
    border-radius: 5px;
  }
`;

export const ApplyButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 82px 0px;
  @media only screen and (max-width: 700px) {
    margin: 10px 0px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  gap: 72px;
  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const InputContWrapper = styled.div`
  @media only screen and (max-width: 700px) {
    display: flex;
    justify-content: center;
  }
`;

export const AmountContWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 90px;
  @media only screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0px;
  }
`;

export const Select = styled.select`
  width: 150px;
  height: 28px;
  background: #fafafa;
  border-radius: 4px;
  padding-left: 20px;
  @media only screen and (min-width: 700px) {
    display: none;
  }
`;

export const Month = styled.div`
  background: #83d1d8;
  box-shadow: 0px 20px 30px rgba(0, 0, 0, 0.05);
  border-radius: 8px;
  width: 96px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 700px) {
  }
`;
