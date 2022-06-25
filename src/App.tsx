import { useEffect, useState } from "react";
import { getBoard } from "./api/getBoard";
import { submitBoard } from "./api/submitBoard";
import "./App.css";
import { Board } from "./Board";

function App() {
  const [board, setBoard] = useState<string[][]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    getBoard().then((value: string[][]) => {
      setBoard(value);
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      {loading ? (
        <b>{"loading"}</b>
      ) : (
        <Board board={board} setBoard={setBoard} />
      )}
      <div>
        <button onClick={() => submitBoard(board)}>Submit</button>
      </div>
    </div>
  );
}

export default App;
