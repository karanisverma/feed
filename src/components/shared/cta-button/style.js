import styled from "styled-components";

export const StyledButton = styled.button`
  width: 240px;
  height: 64px;
  margin-top: 8px;
  padding: 23px;
  display: flex;
  color: white;
  font-size: 16px;
  line-height: 18px;
  font-weight: 600;
  border-radius: 4px;
  border-color: transparent;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
  ${({ color }) => color && `background: ${color}`}
`;
