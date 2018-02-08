const Player = require('./player');

/**
 * Human Player Class
 */
class HumanPlayer extends Player {
    constructor(player) {
        super(player);
    }
}

module.exports = HumanPlayer;