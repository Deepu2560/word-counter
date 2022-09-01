import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [textInput, setTextInput] = useState("");

  const [word, setWord] = useState(0);
  const [char, setChar] = useState(0);
  const [sent, setSent] = useState(0);

  useEffect(() => {
    if (textInput == "") {
      setChar(() => 0);
      setWord(() => 0);
      setSent(() => 0);
    } else {
      let wordSplit = textInput.split(/\s+/).filter((item) => item).length;
      let charCount = textInput.length;
      let sentanceCount = textInput.split(".");

      setChar(() => charCount);
      setWord(() => wordSplit);
      setSent(() => sentanceCount.length);
    }
  }, [textInput]);

  useEffect(() => {
    console.log(textInput);
  }, [word]);
  return (
    <div className="App">
      <h1>Word Counter</h1>
      <div id="main-textarea">
        <textarea
          className="text"
          cols="30"
          rows="10"
          onChange={({ target }) => setTextInput(() => target.value)}
          placeholder="Enter paragraph here..."
        ></textarea>
        <div className="boxes">
          <p className="words box" data-text="Words">
            {word}
          </p>
          <p className="characters box" data-text="Characters">
            {char}
          </p>
          <p className="sentance box" data-text="Sentence">
            {sent}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
