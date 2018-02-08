const Board = require('./board.js');
const HumanPlayer = require('./human-player.js');
const ComputerPlayerDumb = require('./computer-player.js');
const ComputerPlayerLinear = require('./computer-player-linear.js');

/**
 *
 * @type {Readonly<{computer_dumb: ComputerPlayer, computer_linear: ComputerPlayerLinear}>}
 */
const ComputerPlayer = Object.freeze({
    computer_dumb: ComputerPlayerDumb,
    computer_linear: ComputerPlayerLinear
});

/**
 * Main game class used to manage the players and board
 */
class Game {
    constructor(player1, player2, boardConf) {
        this.player = [];
        // We restrict to two players here, however no reason why we couldn't add more
        this.player.push(new (ComputerPlayer[player1.type] || HumanPlayer)(player1));
        this.player.push(new (ComputerPlayer[player2.type] || HumanPlayer)(player2));
        this.board = new Board(boardConf.cols, boardConf.rows, boardConf.maxCountToWin);

        // 0 is player 1, 1 is player 2
        this.playerTurn = 0;
    }

    /**
     * The game run function, runs until a player wins
     */
    run() {
        // Render the player name and associated counter to help the user know who is who
        console.log(`\n\n${this.player[0].getName()} : ${this.player[0].getCounterIcon()} | ${this.player[1].getName()} : ${this.player[1].getCounterIcon()}\n`);

        // Render an initial view of the board
        this.board.render();

        // Get the input from the current player
        this.player[this.playerTurn].getInput((input) => {
            // Try and drop a counter into the board
            let dropped = this.board.dropCounter(input, this.player[this.playerTurn].counterIcon);

            if (dropped) {
                // Did we connect 4 (or maxCountToWin!)?
                if (this.board.checkWin(this.player[this.playerTurn].getCounterIcon())) {
                    this.board.render();
                    console.log(`\n####### ${this.player[this.playerTurn].getName()} is the winner!! #######`);
                    return;
                }

                // Switch players
                this.playerTurn === 0 ? this.playerTurn = 1 : this.playerTurn = 0;

                // All good? Re-run and give the next player a turn
                this.run();
            } else {
                console.log('\n*** Invalid input, try again! ***');
                // Bad input or the column is full, let's run again as the same player
                this.run();
            }
        }, this.board.getCols(), this.board.getRows());
    }
}

module.exports = Game;