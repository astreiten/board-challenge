# Board Challenge

**Some considerations regarding how I addressed this challenge:**

- The format for the cells in the provided example was [column, row]. Instead, I used [row, column] everywhere.
- For the DFS algorithm, I considered 4 directions to explore. (This is: up, down, right, left.) This can be easily extended by adding 4 more calls to the DFS function to explore the corners.
- I implemented the styling, responsivity and the board resizing feature using Material UI, because it is the tool that I use in my daily work.

## Running instructions

1.  Clone this repo.
2.  `npm install`
3.  `npm run`

If you want to run the test cases, use `npm test`
