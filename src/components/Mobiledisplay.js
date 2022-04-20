import React from "react";
import {
  Wrapper,
  Container,
  Contentcontainer,
  Maintext,
  Imgwrapper,
  MaintextWrapper,
  Applybutton,
  CoinWrapper,
  Coincontainer,
} from "../style/Homestyle/Mobiledisplaycss";
import Display from "../assets/DisplayAsset/MobileView.png";
import coin from "../assets/DisplayAsset/coin.png";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const Mobiledisplay = () => {
  return (
    <Wrapper>
      <Container>
        <Imgwrapper>
          <Carousel infiniteLoop autoPlay>
            <div>
              <img src={Display} />
            </div>
            <div>
              <img src={Display} />
            </div>
            <div>
              <img src={Display} />
            </div>
            <div>
              <img src={Display} />
            </div>
          </Carousel>
          {/* <div>
            <img src={Display} />
          </div> */}
        </Imgwrapper>
        <Contentcontainer>
          <MaintextWrapper>
            <Maintext>GET FASTEST LOAN ONLINE IN 4 STEPS</Maintext>
          </MaintextWrapper>
          <Coincontainer>
            <CoinWrapper>
              <div>
                <img src={coin} />
              </div>
              <div>Paperless Application</div>
            </CoinWrapper>
            <CoinWrapper>
              <div>
                <img src={coin} />
              </div>
              <div>Upload documents to complete the process</div>
            </CoinWrapper>
            <CoinWrapper>
              <div>
                <img src={coin} />
              </div>
              <div>Check Loan eligibiity</div>
            </CoinWrapper>
            <CoinWrapper>
              <div>
                <img src={coin} />
              </div>
              <div>voila! your loan is approved!</div>
            </CoinWrapper>
          </Coincontainer>
          <div>
            <Applybutton>Apply Now</Applybutton>
          </div>
        </Contentcontainer>
      </Container>
    </Wrapper>
  );
};

export default Mobiledisplay;
