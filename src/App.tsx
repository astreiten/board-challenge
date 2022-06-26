import { useEffect, useState } from "react";
import { getBoard } from "./api/getBoard";
import { submitBoard } from "./api/submitBoard";
import "./App.css";
import { Board } from "./Board";
import { BoardType } from "./models/board";
import { buildBoard } from "./utils/buildBoard";

function App() {
  const [board, setBoard] = useState<BoardType[][]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const buildClusters = () => {
    submitBoard(board).then((clusters: number[][][]) => {
      let boardCopy = [...board];
      clusters.forEach((cluster) => {
        cluster.forEach(
          (cell) => (boardCopy[cell[0]][cell[1]].cluster = "lightblue")
        );
      });
      setBoard(boardCopy);
    });
  };

  useEffect(() => {
    setLoading(true);
    getBoard().then((value: string[][]) => {
      setBoard(buildBoard(value));
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
        <button onClick={buildClusters}>Submit</button>
      </div>
    </div>
  );
}

export default App;
