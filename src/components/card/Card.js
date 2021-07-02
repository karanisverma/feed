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
  StyledWalletAddress,
} from "./style";
import checkIconImg from "../../assets/checkmark.svg";
import { getTimePassed } from "../../utils/time";
import { formatWalletAddress } from "../../utils/format";
const Card = ({ avatarImg, user, stats, children }) => {
  const { walletAddress, name, isVerified, isVerifiedWallet, userName } = user;
  const { like, comment, timestamp } = stats;

  return (
    <StyledArticle>
      <StyledAvatar src={avatarImg}></StyledAvatar>
      <StyledSection>
        <StyledHeader>
          <StyledUserLabel>
            {user.name && <StyledUserName>{name}</StyledUserName>}
            {isVerified && (
              <StyledCheckIcon
                src={checkIconImg}
                isGrayScale={!isVerified}
              ></StyledCheckIcon>
            )}
            {userName && <StyledSpan>{userName}</StyledSpan>}
            {walletAddress && (
              <StyledWalletAddress>
                {formatWalletAddress(walletAddress)}
              </StyledWalletAddress>
            )}
            <span>
              {isVerifiedWallet != null && (
                <StyledCheckIcon
                  src={checkIconImg}
                  isGrayScale={!isVerifiedWallet}
                ></StyledCheckIcon>
              )}
            </span>
            <StyledSpan>
              <time>{getTimePassed(timestamp)}</time>
            </StyledSpan>
          </StyledUserLabel>
          <StyledMenuIcon>...</StyledMenuIcon>
        </StyledHeader>
        <StyledStatus>{children}</StyledStatus>
        <StyledStats>
          <Like count={like} />
          <Comment count={comment} />
        </StyledStats>
      </StyledSection>
    </StyledArticle>
  );
};

export default Card;
