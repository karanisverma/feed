import React from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "styled-components";

const StyledContainer = styled.div`
  border: 7px solid ${({ theme }) => theme.colors.sharedWindowPrimary};
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
`;

function App() {
  return (
    <StyledContainer>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </StyledContainer>
  );
}

export default App;
