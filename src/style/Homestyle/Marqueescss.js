import styled from "styled-components";

export const Wrapper = styled.div`
  padding-bottom: 50px;
  @media screen and (max-width: 1200px) {
    padding-bottom: 30px;
    margin-left: 20px;
    margin-right: 20px;
  }
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const Text = styled.div`
  font-size: 20px;
  color: rgb(54, 52, 52);
  @media screen and (max-width: 1200px) {
    font-size: 13px;
  }
`;
