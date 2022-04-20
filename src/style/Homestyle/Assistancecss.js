import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 83px 126px;
  background: #f2f3f8;
  @media screen and (max-width: 700px) {
    padding: 10px 30px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Contentcontainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 1200px) {
  }
`;

export const Text = styled.div`
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  text-transform: capitalize;
  color: #363b97;

  @media screen and (max-width: 1200px) {
    font-size: 22px;
  }
`;

export const Nameinput = styled.input`
  background: #ffffff;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  width: 100%;
  max-width: 527px;
  height: 58px;
  border: none;
  padding-left: 10px;

  @media screen and (max-width: 700px) {
    height: 40px;
  }
`;

export const Numberinput = styled.input`
  background: #ffffff;
  box-shadow: 0px 14px 24px rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  width: 100%;
  max-width: 410px;
  height: 58px;
  border: none;
  padding-left: 10px;

  @media screen and (max-width: 700px) {
    margin-left: 13px;
    height: 40px;
  }
`;

export const Submit = styled.button`
  background: #363b97;
  border: 1px solid #1238ff;
  border-radius: 0px 5px 5px 0px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  text-align: center;
  color: #ffffff;
  height: 58px;
  width: 117px;

  @media screen and (max-width: 700px) {
    font-size: 10px;
    border-radius: 5px 5px;
    height: 38px;
    width: 100px;
  }
`;

export const Image = styled.img`
  width: 100%;
  max-width: 509.38px;
  height: auto;
`;

export const Imgcontainer = styled.div``;

export const Buttoncontainer = styled.div`
  @media screen and (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
  }
`;
