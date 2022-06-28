import { Button, Grid } from "@mui/material";
import { BoardType } from "./models/board";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { getHeight } from "./utils/getHeight";

export const Board: React.FC<BoardProps> = ({
  board,
  setBoard,
  submitted,
  boardSize,
}) => {
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
                      backgroundColor: cell.cluster
                        ? "#" + cell.cluster
                        : "#F7FBFC",
                      width: "100%",
                      borderRadius: "0",
                      color: "#1B262C",
                      height: getHeight(boardSize),
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
  boardSize: number;
}
