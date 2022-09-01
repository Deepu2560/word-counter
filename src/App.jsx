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
      let wordSplit = textInput.split(" ");
      let charCount = textInput.length;
      let sentanceCount = textInput.split(".");

      setChar(() => charCount);
      setWord(() => wordSplit.length);
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
          id="textarea"
          onChange={({ target }) => setTextInput(() => target.value)}
        ></textarea>
        <p>{word} = word</p>
        <p>{sent} = sentance</p>
        <p>{char} = char</p>
      </div>
    </div>
  );
}

export default App;
