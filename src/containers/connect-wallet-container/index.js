import React from "react";
import { CTAButton } from "../../components";
import {
  StyledCTAWrapper,
  StyledLink,
  StyledHeader,
  StyledListItem,
  StyledListBullet,
  StyledUL,
  StyledUserIcon,
  StyledUserIconImg,
} from "./styles";
import MetaMaskImg from "../../assets/logo-metamask.svg";
import WalletConnectImg from "../../assets/logo-wallet-connect.svg";
import CoinbaseImg from "../../assets/logo-coinbase.svg";
import UserIconImg from "../../assets/icon-user.svg";
function CTAContainer() {
  return (
    <StyledCTAWrapper>
      <div>
        <StyledUserIcon>
          <StyledUserIconImg src={UserIconImg} alt="user icon" />
        </StyledUserIcon>
        <StyledHeader>Connect your wallet</StyledHeader>

        <StyledUL>
          <StyledListItem>
            <StyledListBullet>*</StyledListBullet> Add your updates
          </StyledListItem>
          <StyledListItem>
            <StyledListBullet>*</StyledListBullet>Customize your Feed
          </StyledListItem>
          <StyledListItem>
            <StyledListBullet>*</StyledListBullet>Join Communities
          </StyledListItem>
          <StyledListItem>
            <StyledListBullet>*</StyledListBullet>Enable Messaging
          </StyledListItem>
        </StyledUL>
      </div>
      <div>
        <CTAButton
          label="Metamask"
          color="#141619"
          icon={MetaMaskImg}
        ></CTAButton>
        <CTAButton
          label="WalletConnect"
          color="#EE57AC"
          icon={WalletConnectImg}
        ></CTAButton>
        <CTAButton
          label="Coinbase"
          color="#0648D7"
          icon={CoinbaseImg}
        ></CTAButton>
      </div>

      <StyledLink href="#">How is your privacy protected?</StyledLink>
    </StyledCTAWrapper>
  );
}

export default CTAContainer;
