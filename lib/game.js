const Board = require('./board.js');
const HumanPlayer = require('./human-player.js');
const ComputerPlayerDumb = require('./computer-player.js');

const ComputerPlayer = Object.freeze({computer_dumb: ComputerPlayerDumb});

class Game {
    constructor(player1, player2, boardSize) {
        this.player1 = new (ComputerPlayer[player1.type] || HumanPlayer)(player1);
        this.player2 = new (ComputerPlayer[player2.type] || HumanPlayer)(player2);
        this.board = new Board(boardSize.cols, boardSize.rows);
    }

    run () {
        console.log(this.player1.getName(), ': ', this.player1.getCounterIcon());
        console.log(this.player2.getName(), ': ', this.player2.getCounterIcon());
        this.board.render();
    }
}

module.exports = Game;