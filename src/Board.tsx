import { Button, Grid } from "@mui/material";
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
          <Grid container key={i} justifyContent="center" alignItems="center">
            {row.map((cell, j) => {
              return (
                <Grid item xs={1}>
                  <Button
                    variant="contained"
                    key={j}
                    style={{
                      backgroundColor: cell.cluster ? "red" : "",
                      width: "100%",
                    }}
                    onClick={() => switchActive(i, j)}
                  >
                    {cell.value}
                  </Button>
                </Grid>
              );
            })}
          </Grid>
        );
      })}
    </>
  );
};

interface BoardProps {
  board: BoardType[][];
  setBoard: React.Dispatch<React.SetStateAction<BoardType[][]>>;
}
