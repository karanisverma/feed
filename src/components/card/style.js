import styled from "styled-components";

export const StyledStats = styled.div`
  display: flex;
  width: 120px;
  justify-content: space-between;
`;
export const StyledAvatar = styled.img`
  height: fit-content;
`;
export const StyledMenuIcon = styled.div`
  color: #c4ccd3;
  font-size: 28px;
  position: relative;
  top: -5px;
`;
export const StyledStatus = styled.div`
  width: 573px;
  font-family: Work Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  font-weight: 400;
`;

export const StyledArticle = styled.article`
  display: flex;
  width: 100%;
  padding: 20px 30px 18px 30px;
  box-sizing: border-box;
  border-bottom: 1px dashed #bdc5cd;
  background: ${({ theme }) => theme.colors.cardBackground};
`;
export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-left: 14.89px;
  justify-content: space-between;
  width: 100%;
`;
export const StyledHeader = styled.header`
  display: flex;
  line-height: 18.77px;
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

export const StyledSpan = styled.span`
  display: inline-block;
  margin-left: 12px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.secondaryText};
`;
export const StyledCheckIcon = styled.img`
  width: 10px;
  margin-left: 6px;
  filter: none;
  ${({ isGrayScale }) => isGrayScale && `filter: grayscale(1)`}
`;
