import styled from "styled-components";

export const StyledTab = styled.div`
  font-family: Work Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  text-transform: uppercase;
  line-height: 16px;

  /* g */

  color: #687684;
`;

export const StyledTabs = styled.div`
  background: white;
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
`;

export const StyledTabContent = styled.div`
  /* color: red; */
`;
