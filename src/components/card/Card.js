import React from "react";

import { Like, Comment } from "../shared";
import { StyledStats } from "./style";
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
        <header>
          <div>
            <h4>{user.name}</h4>
            <span>checkmark</span>
            <span>{walletAddress}</span>
            <span>isVerifiedWallet</span>
            <time>{timestamp}</time>
          </div>
          <div>...</div>
        </header>
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
