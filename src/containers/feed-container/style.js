import styled from "styled-components";
import SearchIcon from "../../assets/icon-search.svg";
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  position: relative;
`;
export const StyledSearchWrapper = styled.div`
  position: absolute;
  box-sizing: border-box;
  right: 0;
  display: flex;
  align-items: center;
  &:before {
    content: url(${SearchIcon});
    position: absolute;
    left: 21px;
    z-index: 3;
  }
  &:after {
    content: "×";
    position: absolute;
    right: 21px;
    font-size: 24px;
    font-weight: 600;
    z-index: 3;
    color: #687684;
    cursor: pointer;
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
  transition: width 300ms;
  &:focus {
    width: 720px;
    margin: 0;
    top: 0;
    z-index: 2;
  }
`;
