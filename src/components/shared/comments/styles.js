import styled from "styled-components";

export const StyledIcon = styled.img`
  width: 11px;
  height: 10px;
  margin-right: 6px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
export const StyledCountLabel = styled.span`
  font-size: 14px;
  line-height: 16.42px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
