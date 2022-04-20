import React from "react";
import {
  PartnerWrapper,
  PartnerContainer,
  PartnersHead,
  Contentcontainer,
  Container,
  NiraImgContainers,
  FulImgContainers,
  ShubhImgContainers,
} from "../style/Homestyle/Partnerscss";
import nira from "../assets/PartnersAssest/nira.png";
import fullerton from "../assets/PartnersAssest/fullerton.png";
import shubh from "../assets/PartnersAssest/shubh.png";

const Partners = () => {
  return (
    <PartnerWrapper>
      <Container>
        <PartnerContainer>
          <PartnersHead>Our Partners</PartnersHead>
        </PartnerContainer>
        <Contentcontainer>
          <div>
            <NiraImgContainers src={nira} />
          </div>
          <div>
            <ShubhImgContainers src={shubh} />
          </div>
          <div>
            <FulImgContainers src={fullerton} />
          </div>
        </Contentcontainer>
      </Container>
    </PartnerWrapper>
  );
};

export default Partners;
