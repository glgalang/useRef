import { useRef } from "react";
import "./styles.css";

export default function App() {
  const textInputRef = useRef();

  const submit = () => {
    console.log(textInputRef.current);
    console.log(textInputRef.current.value);
  };

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <div>
        <label htmlFor="user-input">Input: </label>
        <input type="text" id="user-input" ref={textInputRef} />
        {/* <input type="text" id="user-input" value={userInput} onChange={event => setUserInput(event.target.value)} /> */}
        <button onClick={submit}>Submit</button>
      </div>
    </div>
  );
}
