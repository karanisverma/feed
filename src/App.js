import React from "react";
import "./App.css";

import { FeedContainer, AboutContainer, CTAContainer } from "./containers";
import { StyledContainer } from "./styles";

function App() {
  return (
    <StyledContainer className="App">
      <aside>
        <AboutContainer></AboutContainer>
      </aside>
      <main>
        <FeedContainer></FeedContainer>
      </main>
      <aside>
        <CTAContainer></CTAContainer>
      </aside>
    </StyledContainer>
  );
}

export default App;
