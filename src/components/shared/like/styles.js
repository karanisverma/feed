import styled from "styled-components";

export const StyledStats = styled.img`
  width: 11px;
  height: 10px;
  margin-right: 6px;
`;
export const StyledCountLabel = styled.span`
  font-size: 14px;
  line-height: 16.42px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
