import { Button, Grid } from "@mui/material";
import { BoardType } from "./models/board";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export const Board: React.FC<BoardProps> = ({ board, setBoard, submitted }) => {
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
                    disabled={submitted}
                    key={j}
                    data-testid={"" + i + j}
                    style={{
                      backgroundColor: cell.cluster ? "#3282B8" : "#F7FBFC",
                      width: "100%",
                      borderRadius: "0",
                      color: "#1B262C",
                    }}
                    onClick={() => switchActive(i, j)}
                  >
                    {cell.value === "+" ? (
                      <AddIcon data-testid={"+" + i + j} />
                    ) : (
                      <RemoveIcon data-testid={"-" + i + j} />
                    )}
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
  submitted: boolean;
}
