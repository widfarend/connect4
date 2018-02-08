const Player = require('./player');

class ComputerPlayer extends Player {
    constructor(player) {
        super(player);
    }

    getInput(cb, maxCol) {
        let columnChoice = Math.floor((Math.random() * maxCol) + 1);
        let choiceDelay = Math.floor((Math.random() * 4000) + 1000);
        process.stdout.write(this.name + ': Thinking ');

        let thinking = setInterval(() => process.stdout.write('.'), 500);

        setTimeout(() => {
            cb(columnChoice);
            clearInterval(thinking);
        }, choiceDelay);
    }
}

module.exports = ComputerPlayer;