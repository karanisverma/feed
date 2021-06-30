import React from "react";
import "./App.css";

import styled from "styled-components";

const StyledContainer = styled.div`
  font-family: "Work Sans", sans-serif;
`;

import { FeedContainer } from "./containers";

function App() {
  return (
    <StyledContainer>
      <div className="App">
        <aside>{/* OxPPL details */}</aside>
        <main>
          <FeedContainer></FeedContainer>
        </main>
        <aside>{/* cta section */}</aside>
      </div>
    </StyledContainer>
  );
}

export default App;
