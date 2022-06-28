import { BoardType } from "../models/board";

const DFS = (
  x: number,
  y: number,
  board: BoardType[][],
  visited: boolean[][],
  cluster: number[][]
) => {
  if (
    x < 0 ||
    y < 0 ||
    x >= board[0].length ||
    y >= board.length ||
    board[x][y].value === "-" ||
    visited[x][y]
  ) {
    return;
  }

  cluster.push([x, y]);

  visited[x][y] = true;

  DFS(x + 1, y, board, visited, cluster);
  DFS(x, y + 1, board, visited, cluster);
  DFS(x - 1, y, board, visited, cluster);
  DFS(x, y - 1, board, visited, cluster);
  return;
};

const getClusters = (board: BoardType[][]) => {
  let clusters: number[][][] = [];
  const rows = new Array(board.length).fill("");
  const visited: boolean[][] = rows.map(() =>
    new Array(board[0].length).fill(false)
  );
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j].value === "+") {
        if (!visited[i][j]) {
          let newCluster: number[][] = [];
          DFS(i, j, board, visited, newCluster);
          clusters.push(newCluster);
        }
      }
    }
  }
  return clusters;
};

export async function submitBoard(board: BoardType[][]): Promise<number[][][]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const clusters = getClusters(board);
      resolve(clusters);
    }, 500);
  });
}
