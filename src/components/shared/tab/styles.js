import styled from "styled-components";
import SearchIcon from "../../../assets/icon-search.svg";

export const StyledTab = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 16px;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
export const StyledTabs = styled.div`
  background: white;
  margin-top: 20px;
`;
export const StyledIcon = styled.img`
  margin-right: 10px;
  ${({ active }) =>
    active &&
    `filter: brightness(0.1);
`}
`;
export const StyledTabLabel = styled.div`
  width: 128px;
  height: 48px;
  padding: 0 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  ${({ active }) =>
    active &&
    `color: #141619;
`}
  ${({ active }) =>
    active &&
    `background: white;
`}
`;
export const StyledTabBar = styled.div`
  background: white;
  display: flex;
  background: #f8f8f9;
  top: 0;
  position: sticky;
  z-index: 3;
`;
// StyledTabContent can be used to add default styling in tab panel.
export const StyledTabContent = styled.div``;
export const StyledSearchWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  right: 0;
  display: flex;
  align-items: center;
  &:focus-within {
    &:after {
      opacity: 1;
      cursor: pointer;
    }
  }
  &:before {
    content: url(${SearchIcon});
    position: absolute;
    left: 21px;
    z-index: 3;
    user-select: none;
  }
  &:after {
    content: "×";
    position: absolute;
    right: 9px;
    font-size: 24px;
    font-weight: 400;
    z-index: 3;
    color: ${({ theme }) => theme.colors.secondaryIcon};
    padding: 12px;
    opacity: 0;
    transition: opacity 500ms;
  }
`;
export const StyledSearch = styled.input`
  position: relative;
  box-sizing: border-box;
  right: 0;
  width: 240px;
  height: 48px;
  border: none;
  background: #eaecee;
  padding: 16px 43px;
  font-weight: 600;
  font-size: 14px;
  outline: none;
  line-height: 16px;
  transition: width 500ms;
  &:focus {
    width: 720px;
    margin: 0;
    top: 0;
    z-index: 2;
  }
`;
