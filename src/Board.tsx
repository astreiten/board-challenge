import { BoardType } from "./models/board";

export const Board: React.FC<BoardProps> = ({ board, setBoard }) => {
  const switchActive = (i: number, j: number) => {
    let boardCopy = [...board];
    if (board[i][j].value === "-") {
      boardCopy[i][j].value = "+";
    } else {
      boardCopy[i][j].value = "-";
    }
    setBoard(boardCopy);
  };

  return (
    <>
      {board.map((row, i) => {
        return (
          <div key={i}>
            {row.map((cell, j) => {
              return (
                <button
                  key={j}
                  style={{
                    backgroundColor: cell.cluster ? "red" : "",
                  }}
                  onClick={() => switchActive(i, j)}
                >
                  {cell.value}
                </button>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

interface BoardProps {
  board: BoardType[][];
  setBoard: React.Dispatch<React.SetStateAction<BoardType[][]>>;
}
