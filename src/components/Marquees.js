import React from "react";
import Marquee from "react-fast-marquee";
import { Container, Wrapper, Text } from "../style/Homestyle/Marqueescss";

const Marquees = () => {
  return (
    <Wrapper>
      <Container>
        <Marquee speed="100" gradient={false}>
          <Text>
            Good loans team near ask funds/cash while processing the loan. So,
            please be aware of fraudsters
          </Text>
        </Marquee>
      </Container>
    </Wrapper>
  );
};

export default Marquees;
