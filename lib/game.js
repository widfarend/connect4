const Board = require('./board.js');
const HumanPlayer = require('./human-player.js');
const ComputerPlayerDumb = require('./computer-player.js');

const ComputerPlayer = Object.freeze({computer_dumb: ComputerPlayerDumb});

class Game {
    constructor(player1, player2, boardSize) {
        this.player = [];
        this.player.push(new (ComputerPlayer[player1.type] || HumanPlayer)(player1));
        this.player.push(new (ComputerPlayer[player2.type] || HumanPlayer)(player2));
        this.board = new Board(boardSize.cols, boardSize.rows);
        this.playerTurn = 0;
    }

    run() {
        console.log(`\n\n${this.player[0].getName()} : ${this.player[0].getCounterIcon()} | ${this.player[1].getName()} : ${this.player[1].getCounterIcon()}\n`);

        this.board.render();

        this.player[this.playerTurn].getInput((input) => {
            let dropped = this.board.dropCounter(input, this.player[this.playerTurn].counterIcon);
            if (dropped) {
                if (this.board.checkWin(this.player[this.playerTurn].getCounterIcon())) {
                    this.board.render();
                    console.log(`\n####### ${this.player[this.playerTurn].getName()} is the winner!! #######`);
                    return;
                }

                if (this.playerTurn === 0) {
                    this.playerTurn = 1;
                } else {
                    this.playerTurn = 0;
                }
                this.run();
            } else {
                console.log('\nInvalid input, try again! ');
                this.run();
            }
        }, this.board.getCols());

    }
}

module.exports = Game;