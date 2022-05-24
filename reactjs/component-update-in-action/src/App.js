import React, {useState} from 'react';

import Button from './components/UI/Button/Button';
import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

function App() {
  const [showParagraph, setParagraph ]  = useState(false);

  console.log("App is running");
  const toggleParagraph = () => {
    setParagraph((prevShowParagraph) => !prevShowParagraph);
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show= {false}/>
      <Button onClick={toggleParagraph}>Show Paragrapgh!</Button>
    </div>
  );
}

export default App;
