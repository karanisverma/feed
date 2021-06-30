import React from "react";
import "./App.css";

import styled from "styled-components";

const StyledContainer = styled.div`
  border: 7px solid ${({ theme }) => theme.colors.sharedWindowPrimary};
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
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
