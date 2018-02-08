const Game = require('./lib/game');

// Players 1 and 2 can be both human, one human and one computer or both computer players
// Computer players are:
// 'computer_dumb' -- random counter placement
// 'computer_linear' -- linear counter placement
const player1 = {name: 'Player 1', counterIcon: '*', type: 'human'};
const player2 = {name: 'Computer', counterIcon: '@', type: 'computer_dumb'};
const boardConf = { cols: 7, rows: 6, maxCountToWin: 4};

let connect4 = new Game(player1, player2, boardConf);
connect4.run();

