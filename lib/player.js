const readline = require('readline');

/**
 * Player base class for computer players and human player
 */
class Player {
    constructor(player) {
        this.name = player.name;
        this.counterIcon = player.counterIcon;
    }

    /**
     * Gets the name of the player
     * @returns {string}
     */
    getName () {
        return this.name;
    }

    /**
     * Gets the player's representative icon
     * @returns {string}
     */
    getCounterIcon () {
        return this.counterIcon;
    }

    /**
     * Standard human player input that closes the input once enter is hit and passes the string back to a callback
     * @param cb
     */
    getInput(cb) {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(`\n${this.name}: Enter column in which to drop the counter: \n`, (col) => {
            rl.close();
            cb(col);
        });
    }
}

module.exports = Player;