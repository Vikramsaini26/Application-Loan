import React from "react";
import {
  LoanWrapper,
  Wrapper,
  LoanHead,
  LoanHeadText,
  NeedsContainer,
  NeedText,
  NeedItems,
} from "../style/Loancss";

const Loan = () => {
  return (
    <Wrapper>
      <LoanWrapper>
        <LoanHead>
          <LoanHeadText>Few Personal loan Needs</LoanHeadText>
        </LoanHead>
        <NeedsContainer>
          <div>
            <NeedItems></NeedItems>
            <NeedText>Travel</NeedText>
          </div>
          <div>
            <NeedItems></NeedItems>
            <NeedText>Education</NeedText>
          </div>
          <div>
            <NeedItems></NeedItems>
            <NeedText>wedding</NeedText>
          </div>
          <div>
            <NeedItems></NeedItems>
            <NeedText>Electronics</NeedText>
          </div>
          <div>
            <NeedItems></NeedItems>
            <NeedText>Credit card</NeedText>
          </div>
          <div>
            <NeedItems></NeedItems>
            <NeedText>Emergency</NeedText>
          </div>
          <div>
            <NeedItems></NeedItems>
            <NeedText>Medical Emergency</NeedText>
          </div>
          <div>
            <NeedItems></NeedItems>
            <NeedText>Home Renovation</NeedText>
          </div>
        </NeedsContainer>
      </LoanWrapper>
    </Wrapper>
  );
};

export default Loan;
