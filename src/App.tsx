import { Grid, styled, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getBoard } from "./api/getBoard";
import { submitBoard } from "./api/submitBoard";
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
    <Container>
      <TopBarContainer container justifyContent="center" alignItems="center">
        <TopBarItem item xs={6}>
          <Typography variant="h3">Board Challenge</Typography>
        </TopBarItem>
      </TopBarContainer>
      <Grid container justifyContent="center" alignItems="center">
        {loading ? (
          <b>{"loading"}</b>
        ) : (
          <Grid item xs={12} md={6} lg={10}>
            {" "}
            <Board board={board} setBoard={setBoard} />
            <div>
              <button onClick={buildClusters}>Submit</button>
            </div>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

const Container = styled("div")({
  backgroundColor: "#c8d8e4",
  height: "100vh",
  margin: "0",
});

const TopBarContainer = styled(Grid)({
  backgroundColor: "#2b6777",
  height: "5rem",
});

const TopBarItem = styled(Grid)({
  height: "5rem",
  textAlign: "center",
  marginTop: "1rem",
});

export default App;
