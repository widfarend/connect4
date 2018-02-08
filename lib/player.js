const readline = require("readline");

class Player {
    constructor(player) {
        this.name = player.name;
        this.counterIcon = player.counterIcon;
    }

    getName () {
        return this.name;
    }

    getCounterIcon () {
        return this.counterIcon;
    }

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