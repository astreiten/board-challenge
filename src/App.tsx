import { useState } from "react";
import "./App.css";
import { Board } from "./Board";

function App() {
  const [board, setBoard] = useState<string[][]>([
    ["-", "+", "-", "-"],
    ["-", "+", "-", "-"],
    ["-", "+", "-", "-"],
  ]);
  return (
    <div className="App">
      <Board board={board} setBoard={setBoard} />
    </div>
  );
}

export default App;
