import styled from "styled-components";

export const StyledStats = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`;

export const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StyledUserLabel = styled.header`
  display: flex;
`;

export const StyledUserName = styled.h4`
  margin: 0;
  font-weight: 600;
`;

export const StyledCheckIcon = styled.img`
  width: 10px;
  filter: none;
  ${({ isGrayScale }) => isGrayScale && `filter: grayscale(1)`}
`;
