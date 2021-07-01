import styled from "styled-components";

export const StyledContainer = styled.div`
  font-family: "Work Sans", sans-serif;
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  justify-content: center;
`;
