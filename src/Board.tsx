export const Board: React.FC<BoardProps> = ({ board, setBoard }) => {
  const switchActive = (i: number, j: number) => {
    const boardCopy = [...board];
    if (board[i][j] === "-") {
      boardCopy[i][j] = "+";
    } else {
      boardCopy[i][j] = "-";
    }
    setBoard(boardCopy);
  };

  return (
    <>
      {board.map((row, i) => {
        return (
          <div key={i}>
            {row.map((square, j) => {
              return (
                <button key={j} onClick={() => switchActive(i, j)}>
                  {square}
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
  board: string[][];
  setBoard: React.Dispatch<React.SetStateAction<string[][]>>;
}
