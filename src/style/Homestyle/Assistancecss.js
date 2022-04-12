import styled from "styled-components";

export const Wrapper = styled.div`
  /* background: #f2f3f8; */
`;

export const AssistanceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 100px 170px 300px 100px;
  max-width: 1400px;
  margin-top: 90px;
  background: #f2f3f8;

  @media only screen and (max-width: 1200px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AssistanceImg = styled.img`
  max-width: 500px;
  height: 300px;
  @media only screen and (max-width: 1200px) {
    padding: 0px 0px 0px 100px;
  }
`;
export const AssistanceContent = styled.div``;

export const AssistanceText = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-transform: capitalize;

  color: #363b97;
`;

export const NameText = styled.input`
  background: #ffffff;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 60px;
  width: 530px;
  border: none;
  padding-left: 10px;
  @media only screen and (max-width: 1200px) {
    margin: 0px 0px 0px 100px;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  padding-top: 30px;
`;

export const PhoneText = styled.input`
  background: #ffffff;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  height: 60px;
  width: 412px;
  border: none;
  padding-left: 10px;
  @media only screen and (max-width: 1200px) {
    margin: 0px 0px 0px 100px;
  }
`;

export const FormButton = styled.button`
  height: 62px;
  width: 120px;
  background: blue;
  color: white;
  border: 0;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  background: #363b97;
`;

export const ImgWraper = styled.div``;

export const InputButton = styled.div`
  display: flex;
`;
