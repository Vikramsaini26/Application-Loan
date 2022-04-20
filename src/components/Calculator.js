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
  InputWrapper,
  InputContWrapper,
  AmountContWrapper,
  Container,
  Select,
  Month,
} from "../style/Homestyle/Calculatorcss";

const Calculator = () => {
  return (
    <Wrapper>
      <Container>
        <CalculatorWrapper>
          <HeadContent>
            <CalculatorHead>Loan EMI Calculator</CalculatorHead>
          </HeadContent>
          <CalculatorInput>
            <InputContWrapper>
              <InputContent>Loan amount</InputContent>
            </InputContWrapper>
            <InputWrapper>
              <div>
                <SliderInput type="range"></SliderInput>
              </div>
              <div>
                <InputButton>
                  <div>30,000</div>
                </InputButton>
              </div>
            </InputWrapper>
          </CalculatorInput>
          <CalculatorInput>
            <InputContWrapper>
              <InputContent>Loan tenure</InputContent>
            </InputContWrapper>
            <InputWrapper>
              <div>
                <InputMonth>
                  <div>3 Months</div>
                  <Month>
                    <div>6 Months</div>
                  </Month>
                  <div>9 Months</div>
                  <div>12 Months</div>
                </InputMonth>
                <Select>
                  <option>3 Months </option>
                  <option>6 Months </option>
                  <option>9 Months </option>
                  <option>12 Months </option>
                </Select>
              </div>
              <div>
                <InputButton>
                  <div>6</div>
                  <div> Months</div>
                </InputButton>
              </div>
            </InputWrapper>
          </CalculatorInput>
          <CalculatorInput>
            <InputContWrapper>
              <InputContent>Rate of interest</InputContent>
            </InputContWrapper>
            <InputWrapper>
              <div>
                <SliderInput type="range"></SliderInput>
              </div>
              <div>
                <InputButton>12%</InputButton>
              </div>
            </InputWrapper>
          </CalculatorInput>
          <BorderWrapper>
            <BorderInput></BorderInput>
          </BorderWrapper>
          <AmountWrapper>
            <AmountContWrapper>
              <div>
                <div>
                  <AmountContentText>EMI</AmountContentText>
                  <AmountContentNumber>RS.1412</AmountContentNumber>
                </div>
              </div>

              <div>
                <div>
                  <AmountContentText>Interest amount</AmountContentText>
                  <AmountContentNumber>RS.3018</AmountContentNumber>
                </div>
              </div>
            </AmountContWrapper>
            <AmountContWrapper>
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
            </AmountContWrapper>
          </AmountWrapper>
          <ApplyButtonWrapper>
            <div>
              <ApplyButton>Apply for personal loan</ApplyButton>
            </div>
          </ApplyButtonWrapper>
        </CalculatorWrapper>
      </Container>
    </Wrapper>
  );
};

export default Calculator;
