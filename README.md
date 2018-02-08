# Connect Four

## Requirements

You must have git, node and npm installed to be able clone and run this game.

## Playing the game

First clone the repo into a directory of your choice using the command below.

```
$ git clone https://github.com/widfarend/connect4.git
```

Change to the connect4 directory and run an npm install to install any dependencies.

```
$ npm install
```

Run the game using the npm command:

```
$ npm run start
```

## Changing the player types

You can change the player types, names and counter icon by opening the app.js file and modifying player1 and player2.

```javascript
const player1 = {name: 'Player 1', counterIcon: '*', type: 'human'};
const player2 = {name: 'Computer', counterIcon: '@', type: 'computer_dumb'};
```

You can have a two player game by changing both types to 'human', a computer vs computer or, as is already the case, a human vs computer. There are currently
two types of computer player:

* **computer_dumb:** This computer player will randomly insert counters into the board.
* **computer_linear:** This computer player will insert counters one row after the other, column by column from column 1 to the maximum number of columns.

## Changing the game config

In the same app.js file you can change some of the game configuration settings.

```javascript
const boardConf = { cols: 7, rows: 6, maxCountToWin: 4};
```

* **cols:** Number of columns in the board (default is 7)
* **rows:** Number of rows in the board (default is 6)
* **maxCountToWin:** Maximum number of counters in a horizontal, vertical or diagonal row to win the game (default is 4 -- otherwise it wouldn't be called 'Connect Four'!)

# Tests

You can run the tests using the npm command below.

```
$ npm run test
```