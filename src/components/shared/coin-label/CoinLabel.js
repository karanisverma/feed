import React from "react";
import { StyledCoin, StyledDPV, StyledCoinWrapper } from "./styles";
function CoinLabel(props) {
  const { coinName, color, dailyPriceVariation } = props;
  return (
    <StyledCoinWrapper>
      <StyledCoin color={color}>
        {coinName}
        <StyledDPV color={color}>{dailyPriceVariation}</StyledDPV>
      </StyledCoin>
    </StyledCoinWrapper>
  );
}

export default CoinLabel;
