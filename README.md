# TicTacToe

Tic-tac-toe, noughts and crosses, or Xs and Os is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 matrix as per the below depiction. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner. Game will be considered as 'Draw' when all of the grids are marked.

```
0 1 2
3 4 5
6 7 8
```
# Purpose

This game is developed using React in Test Driven Development approach.

# Functional cases

1)	Display an empty game board with 9 tiles
2)	Player X will always be given first move and selects a tile within the board
3)	Player O will be given alternate move and selects a tile
4)	Status of the game will be displayed E.g. “Next turn is : X”
5)	Players will not be allowed to play on same position
6)	Declare player as winner if horizontally all tiles in first row are taken by same player and winning row be highlighted
7)	Declare player as winner if horizontally all tiles in second row are taken by same player Declare player as winner if horizontally all tiles in third row are taken by same player
8)	Declare player as winner if vertically all tiles in first column are taken by same player Declare player as winner if vertically all tiles in second column are taken by same player
9)	Declare player as winner if vertically all tiles in third column are taken by same player
10)	Declare player as winner if diagonally all tiles from left to right are taken by same player Declare player as winner if diagonally all tiles from right to left are taken by same player
11)	Players will not be able to click on tile on game over
12)	When all tiles are filled in the board and no winner it will be declared as Draw
13)	Game can be restarted at any stage with ‘Reset’ button


# Code commit guidelines

Inspired from Udacity

feat: a new feature
fix: a bug fix
docs: changes to documentation
style: formatting, missing semi colons, etc; no code change
refactor: refactoring production code
test: adding tests, refactoring test; no production code change
chore: updating build tasks, package manager configs, etc; no production code change

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# Reports

Test Coverage Report

PASS  src/test/Status.test.js (13.604s)
PASS  src/test/Game.test.js (5.507s)
PASS  src/test/App.test.js
PASS  src/test/Tile.test.js

|File            |  % Stmts | % Branch |  % Funcs |  % Lines | Uncovered Line #s |
|----------------|----------|----------|----------|----------|-------------------|
|All files            |      100 |      100 |      100 |      100 |                   |
| src                 |      100 |      100 |      100 |      100 |                   |
| App.js             |      100 |      100 |      100 |      100 |                   |
|src/component       |      100 |      100 |      100 |      100 |                   |
|Game.js            |      100 |      100 |      100 |      100 |                   |
|Status.js          |      100 |      100 |      100 |      100 |                   |
|Tile.js            |      100 |      100 |      100 |      100 |                   |
|src/constants       |      100 |      100 |      100 |      100 |                   |
|Constants.js       |      100 |      100 |      100 |      100 |                   |
|StyleConstants.js  |      100 |      100 |      100 |      100 |                   |
|src/helper          |      100 |      100 |      100 |      100 |                   |
| DetermineWinner.js |      100 |      100 |      100 |      100 |                   |
---------------------|----------|----------|----------|----------|-------------------|

Test Suites: 4 passed, 4 total
Tests:       42 passed, 42 total
Snapshots:   4 passed, 4 total
Time:        29.62s
Ran all test suites.
