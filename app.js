const Game = require('./lib/game');
const player1 = {name: 'Player 1', counterIcon: '*', type: 'human'};
const player2 = {name: 'Computer', counterIcon: '+', type: 'computer_dumb'};
const boardSize = { cols: 7, rows: 6};

let connect4 = new Game(player1, player2, boardSize);

connect4.run();

