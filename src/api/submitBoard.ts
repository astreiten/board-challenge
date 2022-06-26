import { BoardType } from "../models/board";

export async function submitBoard(board: BoardType[][]): Promise<number[][][]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(board);
      resolve([
        [
          [1, 0],
          [2, 0],
        ],
        [[3, 2]],
        [[3, 4]],
        [[3, 7]],
        [[5, 8]],
        [
          [7, 8],
          [8, 8],
        ],
      ]);
    }, 3000);
  });
}
