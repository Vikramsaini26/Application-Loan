import React, { useState } from "react";
import { Link } from "react-router-dom";
import cookies from "../assets/ModalAsset/cookiesimg.png";
import {
  Wrapper,
  Container,
  Heading,
  ApplicationButton,
  AffindiButton,
  SelectButton,
  SelectButtonContainer,
  ModalContainer,
  ModalText,
  AcceptButton,
  DeclineButton,
  ButtonContainer,
  ButtonContainerModal,
} from "../style/Homestyle/Headercss";
import affindi from "../assets/HeaderAsset/Group.png";
import globe from "../assets/HeaderAsset/globe.png";
import Modal from "react-modal";
Modal.setAppElement("#root");

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }
  return (
    <Wrapper>
      <Container>
        <div>
          <Heading>GOOD LOANS</Heading>
        </div>
        <ButtonContainer>
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

              <ButtonContainerModal>
                <div>
                  <AcceptButton onClick={toggleModal}>Accept</AcceptButton>
                </div>
                <div>
                  <DeclineButton onClick={toggleModal}>Decline</DeclineButton>
                </div>
              </ButtonContainerModal>
            </ModalContainer>
          </Modal>
          <AffindiButton>
            <img src={affindi} />
            <div>Affinidi Wallet</div>
          </AffindiButton>

          <SelectButtonContainer>
            <div>
              <img src={globe} />
            </div>
            <SelectButton>
              <option>English</option>
            </SelectButton>
          </SelectButtonContainer>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

export default Header;
