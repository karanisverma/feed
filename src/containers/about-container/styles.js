import styled from "styled-components";

export const StyledSecondaryPara = styled.p`
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: 32px;
  margin-bottom: 0;
  width: 225px;
`;
export const StyledPara = styled.p`
  margin: 0;
`;
export const StyledLogoIcon = styled.img`
  margin-top: 90px;
  margin-bottom: 187px;
  width: 64px;
`;
export const StyledAboutWrapper = styled.div`
  width: 225px;
  font-size: 14px;
  margin-right: 109px;
  position: sticky;
  top: 0;
`;

export const StyledHeader = styled.h3`
  margin-bottom: 0;
`;

export const StyledLink = styled.a`
  text-decoration: none;
  display: inline-block;
  margin-top: 32px;
`;
