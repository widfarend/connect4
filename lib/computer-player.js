const Player = require('./player');

/**
 * ComputerPlayer class -- dumb computer player making random column choices
 */
class ComputerPlayer extends Player {
    constructor(player) {
        super(player);
    }

    /**
     * Creates a random column choice and passes it back into a callback and adds a random delay and thinking animation
     * for effect
     * @param cb
     * @param maxCol
     */
    getInput(cb, maxCol) {
        // Choose a random column to drop in
        let columnChoice = Math.floor((Math.random() * maxCol) + 1);
        let choiceDelay = Math.floor((Math.random() * 4000) + 1000);

        // Add an artificial delay and animation to make the computer appear more human
        process.stdout.write(this.name + ': Thinking ');
        let thinking = setInterval(() => process.stdout.write('.'), 500);

        setTimeout(() => {
            cb(columnChoice);
            clearInterval(thinking);
        }, choiceDelay);
    }
}

module.exports = ComputerPlayer;