import styled from "styled-components";

export const StyledCoinWrapper = styled.span`
  display: inline-block;
`;
export const StyledCoin = styled.span`
  color: ${({ color }) => color};
  font-weight: 700;
  font-size: 16px;
  display: flex;
  align-items: center;
`;
export const StyledDPV = styled.span`
  background: ${({ color }) => color};
  color: white;
  font-weight: 600;
  font-size: 11px;
  line-height: 13px;
  letter-spacing: -0.3px;
  padding: 0 2px;
  margin-left: 6px;
`;
