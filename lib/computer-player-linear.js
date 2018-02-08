const Player = require('./player');

class ComputerPlayerLinear extends Player {
    constructor(player) {
        super(player);
        this.currentCol = 1;
        this.currentRow = 0;
    }

    /**
     * Drops counters in a linear fashion starting from first column and row and moving to the next column when it reaches maximum
     * number of rows; passes the choice back into a callback and adds a random delay and thinking animation for effect
     * @param cb
     * @param maxCol
     */
    getInput(cb, maxCol, maxRow) {
        // Calculate linear counter placement
        this.currentRow++;
        if(this.currentRow > maxRow) {
            this.currentRow = 0;
            this.currentCol++;
        }

        if(this.currentCol > maxCol) {
            return;
        }

        // Add an artificial delay and animation to make the computer appear more human
        let choiceDelay = Math.floor((Math.random() * 4000) + 1000);
        process.stdout.write(this.name + ': Thinking ');

        let thinking = setInterval(() => process.stdout.write('.'), 500);

        setTimeout(() => {
            cb(this.currentCol);
            clearInterval(thinking);
        }, choiceDelay);
    }
}

module.exports = ComputerPlayerLinear;