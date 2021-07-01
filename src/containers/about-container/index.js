import React from "react";

import logoImg from "../../assets/0xppl-text-logo.svg";
import logoIconImg from "../../assets/0xppl-icon-logo.svg";
import {
  StyledSecondaryPara,
  StyledAboutWrapper,
  StyledLink,
  StyledHeader,
  StyledPara,
  StyledLogoIcon,
} from "./styles";

export default function AboutContainer() {
  return (
    <StyledAboutWrapper>
      <StyledLogoIcon src={logoIconImg}></StyledLogoIcon>
      <img src={logoImg}></img>
      <div>
        <StyledHeader> Welcome to 0xPeople,</StyledHeader>
        <StyledPara>
          a decentralized social network for the crypto natives.
        </StyledPara>
      </div>
      <StyledSecondaryPara>
        For the first time, you can communicate with users behind the ETH
        addresses. Follow what the others are doing and engage in communication.
      </StyledSecondaryPara>
      <StyledSecondaryPara>
        Service is run on a distributed proof-of-stake network. There’s no
        central company owning the servers.
      </StyledSecondaryPara>
      <StyledLink href="#">Learn more</StyledLink>
    </StyledAboutWrapper>
  );
}
