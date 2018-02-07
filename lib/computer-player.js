const Player = require('./player');

class ComputerPlayer extends Player {
    constructor(player) {
        super(player);
    }
}

module.exports = ComputerPlayer;