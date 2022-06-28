export const getHeight = (boardSize: number) => {
  switch (boardSize) {
    case 1:
      return "2rem";
    case 2:
      return "2.35rem";
    case 3:
      return "2.55rem";
    case 4:
      return "2.75rem";
    case 5:
      return "3rem";
    case 6:
      return "3.25rem";
  }
};
