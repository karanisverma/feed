import styled from "styled-components";

export const StyledContainer = styled.div`
  font-family: "Work Sans", sans-serif;
  display: flex;
  background: ${({ theme }) => theme.colors.background};
  justify-content: center;
`;
export const StyledAsideAboutContainer = styled.aside`
  display: none;
  @media (min-width: 1450px) {
    display: block;
  }
`;
export const StyledAsideCTAContainer = styled.aside`
  display: none;
  @media (min-width: 1045px) {
    display: block;
  }
`;
