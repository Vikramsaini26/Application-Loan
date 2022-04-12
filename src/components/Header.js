import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  ButtonWrapper,
  ApplicationButton,
  WalletButton,
  HeadText,
  SelectButton,
  SelectContainer,
  ModalContainer,
  ModalText,
  ButtonContainer,
  AcceptButton,
  DeclineButton,
} from "../style/Homestyle/Headercss";
import affindi from "../assets/HeaderAsset/Group.png";
import globe from "../assets/HeaderAsset/globe.png";
import cookies from "../assets/ModalAsset/cookiesimg.png";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <Wrapper>
      <div>
        <HeadText>GOOD LOANS</HeadText>
      </div>
      <ButtonWrapper>
        <div>
          <ApplicationButton onClick={toggleModal}>
            Continue Your Application
          </ApplicationButton>
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="My dialog"
            className="modal"
          >
            <ModalContainer>
              <div>
                <img src={cookies} />
              </div>
              <ModalText>
                By clicking “Accept”, you agree Good Loans can store cookies on
                your device and disclose information in accordance with our
                <div>
                  <Link to="/cookies">cookie policy</Link>
                </div>
              </ModalText>

              <ButtonContainer>
                <div>
                  <AcceptButton onClick={toggleModal}>Accept</AcceptButton>
                </div>
                <div>
                  <DeclineButton onClick={toggleModal}>Decline</DeclineButton>
                </div>
              </ButtonContainer>
            </ModalContainer>
          </Modal>
        </div>
        <div>
          <WalletButton>
            <div>
              <img src={affindi} />
            </div>
            <div> Affinidi Wallet</div>
          </WalletButton>
        </div>
        <SelectContainer>
          <div>
            <img src={globe} />
          </div>
          <SelectButton>
            <option>English</option>
          </SelectButton>
        </SelectContainer>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default Header;
