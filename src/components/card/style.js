import styled from "styled-components";

export const StyledStats = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`;

export const StyledCountLabel = styled.span`
  font-size: 14px;
  line-height: 16.42px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
