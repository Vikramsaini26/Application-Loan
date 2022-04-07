import React from "react";
import {
  CalculatorWrapper,
  Wrapper,
  CalculatorHead,
  CalculatorInput,
  HeadContent,
  InputContent,
  SliderInput,
  InputButton,
  InputMonth,
  BorderInput,
  BorderWrapper,
  AmountWrapper,
  AmountContent,
  AmountContentText,
  AmountContentNumber,
  ApplyButtonWrapper,
  ApplyButton,
} from "../style/Calculatorcss";

const Calculator = () => {
  return (
    <Wrapper>
      <CalculatorWrapper>
        <HeadContent>
          <CalculatorHead>Loan EMI Calculator</CalculatorHead>
        </HeadContent>
        <CalculatorInput>
          <InputContent>Loan amount</InputContent>
          <div>
            <SliderInput type="range"></SliderInput>
          </div>
          <div>
            <InputButton>
              <div>30,000</div>
            </InputButton>
          </div>
        </CalculatorInput>
        <CalculatorInput>
          <InputContent>Loan tenure</InputContent>
          <div>
            <InputMonth>
              <div>3 Months </div>
              <div>6 Months</div>
              <div>9 Months</div>
              <div>12 Months</div>
            </InputMonth>
          </div>
          <div>
            <InputButton>6 Months</InputButton>
          </div>
        </CalculatorInput>
        <CalculatorInput>
          <InputContent>Rate of interest</InputContent>
          <div>
            <SliderInput type="range"></SliderInput>
          </div>
          <div>
            <InputButton>12%</InputButton>
          </div>
        </CalculatorInput>
        <BorderWrapper>
          <BorderInput></BorderInput>
        </BorderWrapper>
        <AmountWrapper>
          <div>
            <div>
              <AmountContentText>EMI</AmountContentText>
              <AmountContentNumber>RS.1412</AmountContentNumber>
            </div>
          </div>
          <AmountContent>
            <div>
              <div>
                <AmountContentText>Interest amount</AmountContentText>
                <AmountContentNumber>RS.3018</AmountContentNumber>
              </div>
            </div>
            <div>
              <div>
                <AmountContentText>Principal amount</AmountContentText>
                <AmountContentNumber>RS.30,000</AmountContentNumber>
              </div>
            </div>
            <div>
              <div>
                <AmountContentText>Total amount</AmountContentText>
                <AmountContentNumber>RS.33,018</AmountContentNumber>
              </div>
            </div>
          </AmountContent>
        </AmountWrapper>
        <ApplyButtonWrapper>
          <div>
            <ApplyButton>Apply for personal loan</ApplyButton>
          </div>
        </ApplyButtonWrapper>
      </CalculatorWrapper>
    </Wrapper>
  );
};

export default Calculator;
