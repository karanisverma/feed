import React from "react";
import "./App.css";

import { FeedContainer, AboutContainer } from "./containers";
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
      <aside>{/* <AboutContainer></AboutContainer> */}</aside>
    </StyledContainer>
  );
}

export default App;
