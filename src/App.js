import React from "react";
import "./App.css";
import { FeedContainer } from "./containers";

function App() {
  return (
    <div className="App">
      <aside>{/* OxPPL details */}</aside>
      <main>
        <FeedContainer></FeedContainer>
      </main>
      <aside>{/* cta section */}</aside>
    </div>
  );
}

export default App;
