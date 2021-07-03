import React from "react";

import { StyledButton } from "./style";

function CTAButton({ label, icon, color = "black" }) {
  return (
    <div>
      <StyledButton color={color}>
        {label}
        <img src={icon} alt="" />
      </StyledButton>
    </div>
  );
}

export default CTAButton;
