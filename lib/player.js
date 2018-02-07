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
}

module.exports = Player;