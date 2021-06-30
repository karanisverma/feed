import React from "react";
import commentIcon from "../../../assets/comment.svg";
import { StyledIcon, StyledCountLabel } from "./styles";
function Comment(props) {
  const { count } = props;
  console.log(count);
  return (
    <div>
      <StyledIcon src={commentIcon}></StyledIcon>
      <StyledCountLabel>{count}</StyledCountLabel>
    </div>
  );
}

export default Comment;
