import React from "react";
import {
  Wrapper,
  ContentText,
  BorrowButton,
  ContentMAin,
} from "../style/Homestyle/contentcss";
import stockimg from "../assets/ContentAsset/content1.png";

const Content = () => {
  return (
    <Wrapper>
      <ContentMAin>
        <div>
          <ContentText>Loan upto 1,00,000 at your fingertips</ContentText>
        </div>
        <div>
          <BorrowButton>Borrow now</BorrowButton>
        </div>
      </ContentMAin>
      <div>
        <img src={stockimg} />
      </div>
    </Wrapper>
  );
};

export default Content;
