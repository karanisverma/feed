import React from "react";

import { StyledIcon, StyledCountLabel } from "../comments/styles";
import likeIcon from "../../../assets/like.svg";
function Like(props) {
  const { count } = props;
  console.log(count);
  return (
    <div>
      <StyledIcon src={likeIcon}></StyledIcon>
      <StyledCountLabel>{count}</StyledCountLabel>
    </div>
  );
}

export default Like;
