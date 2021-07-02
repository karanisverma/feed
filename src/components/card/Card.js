import React from "react";

import { Like, Comment } from "../shared";
import {
  StyledStats,
  StyledCheckIcon,
  StyledHeader,
  StyledUserLabel,
  StyledUserName,
  StyledSpan,
  StyledSection,
  StyledArticle,
  StyledAvatar,
  StyledStatus,
  StyledMenuIcon,
} from "./style";
import checkIconImg from "../../assets/checkmark.svg";
import { getTimePassed } from "../../utils/time";
import { formatWalletAddress } from "../../utils/format";
const Card = ({ avatarImg, user, stats, children }) => {
  const { walletAddress, name, isVerified, isVerifiedWallet, userName } = user;
  const { like, comment, timestamp } = stats;
  console.log(
    avatarImg,
    user,
    stats,
    walletAddress,
    name,
    isVerified,
    isVerifiedWallet,
    like,
    comment,
    timestamp
  );
  return (
    <StyledArticle>
      <StyledAvatar src={avatarImg}></StyledAvatar>
      <StyledSection>
        <StyledHeader>
          <StyledUserLabel>
            <StyledUserName>{user.name}</StyledUserName>
            {/* TODO: how to handle space component changes?? */}
            <StyledCheckIcon src={checkIconImg}></StyledCheckIcon>
            <StyledSpan>{userName}</StyledSpan>
            <StyledSpan>{formatWalletAddress(walletAddress)}</StyledSpan>
            <span>
              <StyledCheckIcon
                src={checkIconImg}
                isGrayScale={true}
              ></StyledCheckIcon>
            </span>
            <StyledSpan>
              <time>{getTimePassed(timestamp)}</time>
            </StyledSpan>
          </StyledUserLabel>
          <StyledMenuIcon>...</StyledMenuIcon>
        </StyledHeader>
        <StyledStatus>{children}</StyledStatus>
        <StyledStats>
          <Like count={10} />
          <Comment count={10} />
        </StyledStats>
      </StyledSection>
    </StyledArticle>
  );
};

export default Card;
