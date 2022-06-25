export async function submitBoard(board: string[][]): Promise<number[][][]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(board);
      resolve([
        [
          [0, 1],
          [0, 2],
        ],
        [[2, 3]],
        [[4, 3]],
        [[7, 3]],
        [[8, 5]],
        [
          [8, 7],
          [8, 8],
        ],
      ]);
    }, 3000);
  });
}
