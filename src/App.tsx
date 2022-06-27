import {
  Box,
  Button,
  CircularProgress,
  Grid,
  styled,
  Typography,
} from "@mui/material";
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
        <TopBarItem item xs={12} md={6} lg={6}>
          <Typography variant="h3" fontFamily={"Roboto"}>
            Board Challenge
          </Typography>
        </TopBarItem>
      </TopBarContainer>
      <Grid container justifyContent="center" alignItems="center">
        {loading ? (
          <Box sx={{ display: "flex", marginTop: "10rem" }}>
            <CircularProgress size={100} />
          </Box>
        ) : (
          <Grid item xs={12} md={8} lg={6} sx={{ marginTop: "2rem" }}>
            {" "}
            <Board board={board} setBoard={setBoard} />
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "2rem" }}
            >
              <Button
                variant="contained"
                onClick={buildClusters}
                sx={{
                  color: "#1B262C",
                  fontFamily: "Roboto",
                  backgroundColor: "#769FCD",
                }}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

const Container = styled("div")({
  backgroundColor: "#D6E6F2",
  height: "100vh",
  margin: "0",
});

const TopBarContainer = styled(Grid)({
  backgroundColor: "#769FCD",
  height: "5rem",
});

const TopBarItem = styled(Grid)({
  height: "5rem",
  textAlign: "center",
  marginTop: "1rem",
});

export default App;
