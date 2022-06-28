import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Slider,
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
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [sliderValue, setSliderValue] = useState<any>(1);

  const buildClusters = () => {
    setSubmitting(true);
    submitBoard(board).then((clusters: number[][][]) => {
      let boardCopy = [...board];
      clusters.forEach((cluster) => {
        let clusterColor = Math.floor(Math.random() * 16777215).toString(16);
        cluster.forEach(
          (cell) => (boardCopy[cell[0]][cell[1]].cluster = clusterColor)
        );
      });
      setBoard(boardCopy);
      setSubmitted(true);
      setSubmitting(false);
    });
  };

  const getAndSetBoard = () => {
    setLoading(true);
    getBoard().then((value: string[][]) => {
      setBoard(buildBoard(value));
      setLoading(false);
    });
  };

  const resetBoard = () => {
    setSubmitted(false);
    getAndSetBoard();
  };

  useEffect(() => {
    getAndSetBoard();
  }, []);

  return (
    <Container>
      <TopBarContainer container justifyContent="center" alignItems="center">
        <TopBarItem item xs={12} md={6} lg={6}>
          <Typography data-testid="title" variant="h3" fontFamily={"Roboto"}>
            Board Challenge
          </Typography>
        </TopBarItem>
      </TopBarContainer>
      <Grid container justifyContent="center" alignItems="center">
        {loading ? (
          <Box sx={{ display: "flex", marginTop: "10rem" }}>
            <CircularProgress data-testid="spinner" size={100} />
          </Box>
        ) : (
          <Grid
            data-testid="board"
            item
            xs={12}
            md={8}
            lg={5 + sliderValue}
            sx={{ marginTop: "2rem" }}
          >
            <Board
              board={board}
              setBoard={setBoard}
              submitted={submitted}
              boardSize={sliderValue}
            />
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "2rem" }}
            >
              {submitting ? (
                <CircularProgress />
              ) : (
                <Button
                  variant="contained"
                  onClick={submitted ? resetBoard : buildClusters}
                  sx={{
                    color: "#1B262C",
                    fontFamily: "Roboto",
                    backgroundColor: "#769FCD",
                  }}
                >
                  {submitted ? "Reset" : "Submit"}
                </Button>
              )}
            </Grid>
            <Grid
              container
              justifyContent="center"
              alignItems="center"
              sx={{ marginTop: "2rem" }}
            >
              <Box sx={{ width: 300 }}>
                <Typography>Board Size</Typography>
                <Slider
                  aria-label="Board Size"
                  defaultValue={1}
                  getAriaValueText={(value, index) => {
                    return "$(value)";
                  }}
                  sx={{ color: "#769FCD" }}
                  valueLabelDisplay="auto"
                  step={1}
                  marks
                  min={1}
                  max={6}
                  value={sliderValue}
                  onChange={(event, value) => {
                    setSliderValue(value);
                  }}
                />
              </Box>
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
