import React, { useState, useCallback } from "react";

import Button from "./components/UI/Button/Button";
import "./App.css";
import DemoOutput from "./components/Demo/DemoOutput";

function App() {
  const [showParagraph, setParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("App is running");
  const toggleParagraph = useCallback(() => {
    if (allowToggle) {
      setParagraph((prevShowParagraph) => !prevShowParagraph);
    }
  }, [allowToggle]);

  const allowToggleHandler = () =>   {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle</Button>
      <Button onClick={toggleParagraph}>Toggle Paragrapgh!</Button>
    </div>
  );
}

export default App;
