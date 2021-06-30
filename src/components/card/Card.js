import React from "react";

import { Like, Comment } from "../shared";
import {
  StyledStats,
  StyledCheckIcon,
  StyledHeader,
  StyledUserLabel,
  StyledUserName,
} from "./style";
import checkIconImg from "../../assets/checkmark.svg";
const Card = ({ avatarImg, user, stats, children }) => {
  const { walletAddress, name, isVerified, isVerifiedWallet } = user;
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
    <article>
      <img src={avatarImg}></img>
      <div>
        <StyledHeader>
          <StyledUserLabel>
            <StyledUserName>{user.name}</StyledUserName>
            {/* TODO: how to handle space component changes?? */}
            <span>
              <StyledCheckIcon src={checkIconImg}></StyledCheckIcon>
            </span>
            <span>{walletAddress}</span>
            <span>
              <StyledCheckIcon
                src={checkIconImg}
                isGrayScale={true}
              ></StyledCheckIcon>
            </span>
            <time>{timestamp}</time>
          </StyledUserLabel>
          <div>...</div>
        </StyledHeader>
        <div>{children}</div>
      </div>
      <StyledStats>
        <Like count={10} />
        <Comment count={10} />
      </StyledStats>
    </article>
  );
};

export default Card;
