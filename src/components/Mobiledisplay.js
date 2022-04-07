import React from "react";
import {
  MobileWrapper,
  MobileImage,
  MobileContentWrapper,
  MobileContentText,
  MobileImgText,
  ApplyButton,
  MobileText,
} from "../style/Mobiledisplaycss";
import img1 from "../assets/DisplayAsset/MobileView.png";
import CoinImg from "../assets/DisplayAsset/coin.png";

const Mobiledisplay = () => {
  return (
    <MobileWrapper>
      <div>
        <MobileImage src={img1} />
      </div>
      <MobileContentWrapper>
        <MobileContentText>GET</MobileContentText>
        <MobileContentText>FASTEST LOAN ONLINE</MobileContentText>
        <MobileContentText>IN 4 STEPS</MobileContentText>
        <MobileImgText>
          <div>
            <img src={CoinImg} />
          </div>
          <MobileText>Paperless Application</MobileText>
        </MobileImgText>
        <MobileImgText>
          <div>
            <img src={CoinImg} />
          </div>
          <MobileText>upload documents to complete the process</MobileText>
        </MobileImgText>
        <MobileImgText>
          <div>
            <img src={CoinImg} />
          </div>
          <MobileText>Check Loan eligibiity</MobileText>
        </MobileImgText>
        <MobileImgText>
          <div>
            <img src={CoinImg} />
          </div>
          <MobileText>voila! your loan is approved!</MobileText>
        </MobileImgText>
        <ApplyButton>Apply Now</ApplyButton>
      </MobileContentWrapper>
    </MobileWrapper>
  );
};

export default Mobiledisplay;
