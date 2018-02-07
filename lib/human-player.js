const Player = require('./player');

class HumanPlayer extends Player {
    constructor(player) {
        super(player);
    }
}

module.exports = HumanPlayer;