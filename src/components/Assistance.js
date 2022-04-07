import React from "react";
import {
  AssistanceWrapper,
  AssistanceContent,
  AssistanceText,
  AssistanceImg,
  NameText,
  FormWrapper,
  PhoneText,
  FormButton,
  ImgWraper,
  InputButton,
  Wrapper,
} from "../style/Assistancecss";
import img1 from "../assets/AssisitanceAsset/Group.png";
import Calculator from "./Calculator";
const Assistance = () => {
  return (
    <Wrapper>
      <AssistanceWrapper>
        <ImgWraper>
          <AssistanceImg src={img1} />
        </ImgWraper>
        <AssistanceContent>
          <AssistanceText>Need Assistance?</AssistanceText>
          <div>Request a call back</div>
          <FormWrapper>
            <NameText type="text" placeholder="Enter Your Name" />
            <InputButton>
              <PhoneText
                type="phone"
                placeholder="Your Phone Number"
              ></PhoneText>
              <FormButton>Request</FormButton>
            </InputButton>
          </FormWrapper>
        </AssistanceContent>
      </AssistanceWrapper>
      <Calculator />
    </Wrapper>
  );
};

export default Assistance;
