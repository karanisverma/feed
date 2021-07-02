import React from "react";
import { Card } from "../../components";
import { Tab, Tabs } from "../../components/shared";
import { StyledContainer } from "./style";
import homeIconImg from "../../assets/icon-home.svg";
import messageIconImg from "../../assets/icon-message.svg";
import communitiesIconImg from "../../assets/icon-communities.svg";
import userImage from "./user.png";
function FeedContainer(props) {
  console.log(props);
  const [activeKey, setActiveKey] = React.useState("0");

  return (
    <StyledContainer>
      <Tabs
        onChange={({ activeKey }) => {
          console.log("onChange is called for tabs-->", activeKey);
          setActiveKey(activeKey);
        }}
        activeKey={activeKey}
      >
        <Tab title="Feed" icon={homeIconImg}>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            Tax rates seem likely to rise for the wealthiest and highest-earning
            taxpayers under the Biden administration. For those with traditional
            retirement accounts, making moves ahead of tax law changes can
            reduce income-tax bills in retirement.
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            This is card children content!!
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            This is card children content!!
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            This is card children content!!
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            This is card children content!!
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            This is card children content!!
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            This is card children content!!
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            This is card children content!!
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            This is card children content!!
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            This is card children content!!
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{ comment: 3, like: 49, timestamp: 1625076103498 }}
          >
            This is card children content!!
          </Card>
        </Tab>
        <Tab title="Communities" icon={communitiesIconImg}>
          This is tab2
        </Tab>
        <Tab title="Messages" icon={messageIconImg}>
          This is tab3
        </Tab>
      </Tabs>
    </StyledContainer>
  );
}

export default FeedContainer;
