import React from "react";
import {
  HeaderContainer,
  HeadLeft,
  Head,
  HeadContent,
  Button,
  WalletButton,
  ButtonContent,
  WalletImage,
  SelectContainer,
  SelectMain,
  SelectImg,
} from "../style/Headercss";
import img1 from "../assets/HeaderAsset/globe.png";
import img2 from "../assets/HeaderAsset/Group.png";
const Header = () => {
  return (
    <HeaderContainer>
      <HeadLeft>
        <HeadContent>GOOD LOANS</HeadContent>
      </HeadLeft>

      <Head>
        <div>
          <Button>Continue Your Application</Button>
        </div>
        <div>
          <WalletButton>
            <ButtonContent>
              <div>
                <WalletImage src={img2} />
              </div>
              <div> Affinidi Wallet</div>
            </ButtonContent>
          </WalletButton>
        </div>
        <div>
          <SelectContainer>
            <SelectImg src={img1} />
            <SelectMain>
              <option>English</option>
            </SelectMain>
          </SelectContainer>
        </div>
      </Head>
    </HeaderContainer>
  );
};

export default Header;
