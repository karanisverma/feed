import React from "react";

import "./App.css";
import { FeedContainer, AboutContainer, CTAContainer } from "./containers";
import {
  StyledContainer,
  StyledAsideAboutContainer,
  StyledAsideCTAContainer,
} from "./styles";

function App() {
  return (
    <StyledContainer className="App">
      <StyledAsideAboutContainer>
        <AboutContainer></AboutContainer>
      </StyledAsideAboutContainer>
      <main>
        <FeedContainer></FeedContainer>
      </main>
      <StyledAsideCTAContainer>
        <CTAContainer></CTAContainer>
      </StyledAsideCTAContainer>
    </StyledContainer>
  );
}

export default App;
