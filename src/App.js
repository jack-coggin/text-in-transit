import { useState, useEffect } from "react";
import ScrollerDisplay from "./ScrollerDisplay";
import TextInput from "./TextInput";

function App() {
  const [text, setText] = useState("testing");
  const [time, setTime] = useState("10");
  const [width, setWidth] = useState("4");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",

        height: "100vh",
        backgroundColor: "black",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          color: "white",
        }}
      >
        <ScrollerDisplay text={TextInput(text)} time={time} width={width} />
      </div>
      <label
        style={{
          color: "white",
        }}
      >
        Text
      </label>
      <input
        style={{
          backgroundColor: "black",
          color: "white",
        }}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <label
        style={{
          color: "white",
        }}
      >
        Time
      </label>
      <input
        style={{
          backgroundColor: "black",
          color: "white",
        }}
        value={time}
        onChange={(e) => setTime(e.target.value)}
      />
      <label
        style={{
          color: "white",
        }}
      >
        Width
      </label>
      <input
        style={{
          backgroundColor: "black",
          color: "white",
        }}
        value={width}
        onChange={(e) => setWidth(e.target.value)}
      />
    </div>
  );
}

export default App;
