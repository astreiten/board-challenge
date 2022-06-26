export const buildBoard = (boardConfiguration: string[][]) => {
  return boardConfiguration.map((row) => {
    return row.map((cell) => {
      return { value: cell, cluster: null };
    });
  });
};
