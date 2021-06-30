import React from "react";
import { Card } from "../../components";
import userImage from "./user.png";
function FeedContainer(props) {
  console.log(props);
  return (
    <div>
      <Card
        avatarImg={userImage}
        user={{
          name: "flippen.eth",
          isVerified: false,
          walletAddress: "1232121....123123",
          isVerifiedWallet: false,
        }}
        stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
      >
        This is card children content!!
      </Card>
    </div>
  );
}

export default FeedContainer;
