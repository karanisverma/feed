import styled from "styled-components";

export const StyledUL = styled.ul`
  padding: 0;
  margin-bottom: 24px;
  margin-top: 20px;
`;
export const StyledUserIcon = styled.div`
  height: 80px;
  width: 80px;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(104, 118, 132, 0.1);
  margin-top: 205px;
  margin-bottom: 0;
  border-radius: 100%;
  display: flex;
  justify-content: center;
`;
export const StyledUserIconImg = styled.img`
  width: 34px;
`;
export const StyledListItem = styled.li`
  list-style: none;
  color: ${({ theme }) => theme.colors.secondaryText};
  font-size: 12px;
  display: flex;
`;
export const StyledListBullet = styled.span`
  margin-right: 12px;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondaryText};
  opacity: 0.5;
  font-weight: 600;
`;
export const StyledCTAWrapper = styled.div`
  margin-left: 100px;
  top: 0;
  position: sticky;
  width: 225px;
  display: flex;
  flex-direction: column;
`;
export const StyledHeader = styled.h2`
  font-family: Work Sans;
  width: 147px;
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 28px;
  letter-spacing: -1px;
  color: #141619;
  margin-bottom: 0;
  margin-top: 28px;
`;
export const StyledLink = styled.a`
  text-decoration: none;
  display: inline-block;
  font-size: 14px;
  margin-top: 34px;
`;
