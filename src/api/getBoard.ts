export async function getBoard(): Promise<string[][]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        ["-", "+", "-", "-"],
        ["-", "+", "-", "-"],
        ["-", "+", "-", "-"],
      ]);
    }, 3000);
  });
}
