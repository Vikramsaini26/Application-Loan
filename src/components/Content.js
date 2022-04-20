import React from "react";
import {
  Wrapper,
  Container,
  Contenttext,
  Borrowbutton,
  Contentcontainer,
  Imgcontainer,
  Image,
  Buttoncontainer,
  Imgwrapper,
  Imgone,
  Imgtwo,
  Imgthree,
  Containerthree,
  Containerpayment,
  ContainerCharges,
  Containerrequire,
} from "../style/Homestyle/Contentcss";
import displayimg from "../assets/ContentAsset/content1.png";
import doodle from "../assets/ContentAsset/Doodle.png";
import rectangle from "../assets/ContentAsset/Rectangle.png";

const Content = () => {
  return (
    <Wrapper>
      <Container>
        <Contentcontainer>
          <div>
            <Contenttext>Loan upto 1,00,000 at your fingertips</Contenttext>
          </div>
          <Buttoncontainer>
            <Borrowbutton>Borrow Now</Borrowbutton>
          </Buttoncontainer>
          <Containerthree>
            <ContainerCharges>No Hidden Charges</ContainerCharges>
            <Containerpayment>Flexible Re-Payment</Containerpayment>
            <Containerrequire>No Guarantor Required</Containerrequire>
          </Containerthree>
        </Contentcontainer>
        <Imgcontainer>
          <Imgwrapper>
            <Imgone src={displayimg} />

            <Imgtwo src={doodle} />

            <Imgthree src={rectangle} />
          </Imgwrapper>
        </Imgcontainer>
      </Container>
    </Wrapper>
  );
};

export default Content;
