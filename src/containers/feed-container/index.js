import React from "react";
import { Card } from "../../components";
import { Tab, Tabs, CoinLabel } from "../../components/shared";
import {
  StyledContainer,
  StyledCurrency,
  StyledLink,
  StyledFilter,
  StyledFilterDetails,
  StyledFilterSelect,
  StyledFilterName,
  StyledPlaceHolder,
} from "./style";
import homeIconImg from "../../assets/icon-home.svg";
import messageIconImg from "../../assets/icon-message.svg";
import communitiesIconImg from "../../assets/icon-communities.svg";
import logoIconImg from "../../assets/0xppl-icon-logo.svg";
import userImage from "./user.png";
import userImage2 from "../../assets/user-2.svg";
import userImage3 from "../../assets/user-3.svg";
import userImage4 from "../../assets/user-4.svg";
const HOUR_IN_MS = 3600000;
const MIN_IN_MS = 60000;
function FeedContainer() {
  const [activeKey, setActiveKey] = React.useState("0");
  return (
    <StyledContainer>
      <Tabs
        onChange={({ activeKey }) => {
          setActiveKey(activeKey);
        }}
        activeKey={activeKey}
      >
        <Tab title="Feed" icon={homeIconImg}>
          <StyledFilter>
            <StyledFilterDetails>
              Most interesting blockchain activity
            </StyledFilterDetails>
            <StyledFilterSelect>
              filter: <StyledFilterName>TOP ACTIVITY</StyledFilterName>
            </StyledFilterSelect>
          </StyledFilter>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: true,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{
              comment: 3,
              like: 4,
              timestamp: Date.now() - 4 * MIN_IN_MS,
            }}
          >
            Swaped <StyledCurrency>$4,200,000</StyledCurrency> of{" "}
            <CoinLabel
              coinName="WETH"
              color="#0648D7"
              dailyPriceVariation="-100%"
            ></CoinLabel>{" "}
            for{" "}
            <CoinLabel
              coinName="ATOM"
              color="#2D8690"
              dailyPriceVariation="-100%"
            ></CoinLabel>{" "}
          </Card>
          <Card
            avatarImg={logoIconImg}
            user={{
              name: "Prasanna S",
              isVerified: false,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{
              comment: 31,
              like: 14,
              timestamp: Date.now() - 24 * MIN_IN_MS,
            }}
          >
            You all ready for what’s next?
          </Card>
          <Card
            avatarImg={userImage2}
            user={{
              name: "Marc Andreessen",
              isVerified: false,
              userName: "0xMarcA",
              walletAddress: "0x43A12kgdygjrsqtzq2n0yrf2493p83kkfjhx58S1",
              isVerifiedWallet: null,
            }}
            stats={{
              comment: 3,
              like: 49,
              timestamp: Date.now() - 40 * MIN_IN_MS,
            }}
          >
            Sons of the Fathers: The Civil Religion of the American Revolution
            by Catherine L. Albanese{" "}
            <StyledLink href="#">https://amazon.com/gp/product/...</StyledLink>
          </Card>
          <Card
            avatarImg={userImage3}
            user={{
              name: "flippen.eth",
              isVerified: true,
              userName: "0xPras",
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{
              comment: 2,
              like: 9,
              timestamp: Date.now() - 1 * HOUR_IN_MS,
            }}
          >
            Sold of WBTC <StyledCurrency>$200,000,000</StyledCurrency> of{" "}
            <CoinLabel
              coinName="WBTC"
              color="#141619"
              dailyPriceVariation="-20%"
            ></CoinLabel>
          </Card>
          <Card
            avatarImg={userImage4}
            user={{
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
            }}
            stats={{
              comment: 7,
              like: 9,
              timestamp: Date.now() - 2 * HOUR_IN_MS,
            }}
          >
            This is card children content!!
          </Card>
          <Card
            avatarImg={userImage}
            user={{
              name: "flippen.eth",
              isVerified: false,
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: false,
            }}
            stats={{
              comment: 12,
              like: 6,
              timestamp: Date.now() - 24 * HOUR_IN_MS,
            }}
          >
            Swaped <StyledCurrency>$640,567 </StyledCurrency> of{" "}
            <CoinLabel
              coinName="DOGE"
              color="#EE57AC"
              dailyPriceVariation="-100%"
            ></CoinLabel>{" "}
            for{" "}
            <CoinLabel
              coinName="ATOM"
              color="#2D8690"
              dailyPriceVariation="-100%"
            ></CoinLabel>{" "}
          </Card>
          <Card
            avatarImg={userImage2}
            user={{
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: null,
            }}
            stats={{
              comment: 24,
              like: 23,
              timestamp: Date.now() - 49 * HOUR_IN_MS,
            }}
          >
            Purchased <StyledCurrency>$3,141,000</StyledCurrency>{" "}
            <CoinLabel
              coinName="ETH"
              color="#0648D7"
              dailyPriceVariation="+100%"
            ></CoinLabel>
          </Card>
          <Card
            avatarImg={logoIconImg}
            user={{
              walletAddress: "bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh",
              isVerifiedWallet: true,
            }}
            stats={{
              comment: 6,
              like: 4,
              timestamp: Date.now() - 49 * HOUR_IN_MS - 10 * MIN_IN_MS,
            }}
          >
            Tax rates seem likely to rise for the wealthiest and highest-earning
            taxpayers under the Biden administration. For those with traditional
            retirement accounts, making moves ahead of tax law changes can
            reduce income-tax bills in retirement.
          </Card>
        </Tab>
        <Tab title="Communities" icon={communitiesIconImg}>
          <StyledPlaceHolder>Communities coming soon!</StyledPlaceHolder>
        </Tab>
        <Tab title="Messages" icon={messageIconImg}>
          <StyledPlaceHolder>Messages coming soon!</StyledPlaceHolder>
        </Tab>
      </Tabs>
    </StyledContainer>
  );
}

export default FeedContainer;
