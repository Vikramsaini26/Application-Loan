import React from "react";
import {
  Container,
  Wrapper,
  Contentcontainer,
  Text,
  Nameinput,
  Numberinput,
  Submit,
  Image,
  Imgcontainer,
  Buttoncontainer,
} from "../style/Homestyle/Assistancecss";
import assisitance from "../assets/AssisitanceAsset/Group.png";
const Assisitance = () => {
  return (
    <Wrapper>
      <Container>
        <Imgcontainer>
          <div>
            <Image src={assisitance} />
          </div>
        </Imgcontainer>
        <Contentcontainer>
          <div>
            <Text>Need assistance?</Text>
            <div>Request a call back</div>
          </div>
          <div>
            <Nameinput type="text" placeholder="Enter Your Name" />
          </div>
          <Buttoncontainer>
            <Numberinput type="text" placeholder="Your Phone Number" />
            <Submit>Request</Submit>
          </Buttoncontainer>
        </Contentcontainer>
      </Container>
    </Wrapper>
  );
};

export default Assisitance;
