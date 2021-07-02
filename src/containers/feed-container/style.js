import styled from "styled-components";
export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 720px;
  position: relative;
`;

export const StyledCurrency = styled.span`
  font-weight: 700;
`;

export const StyledLink = styled.a`
  text-decoration: none;
`;

export const StyledFilter = styled.div`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.secondaryText};
  padding: 17px 31px;
  border-bottom: 1px dashed #bdc5cd;
  font-size: 12px;
`;
export const StyledFilterName = styled.span`
  margin-left: 5px;
  font-weight: bold;
`;
export const StyledFilterDetails = styled.div`
  display: flex;
`;
export const StyledFilterSelect = styled.div`
  display: flex;
`;
export const StyledPlaceHolder = styled.div`
  min-height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
