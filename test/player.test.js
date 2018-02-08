const readline = require('readline');
const Player = require('../lib/player');

describe('#Player', () => {
    test('should create a new player', () => {
        const playerName = 'Player 1';
        const counterIcon = '#';
        let player = new Player({name: playerName, counterIcon: counterIcon});

        expect(player.getName()).toEqual(playerName);
        expect(player.getCounterIcon()).toEqual(counterIcon);
    });

    // TODO: Figure out how to pass input
    // test('should accept an input and return the value', done => {
    //     let player = new Player({name: 'Player 1', counterIcon: '#'});
    //     let result;
    //
    //     const rl = readline.createInterface({
    //         input: process.stdin,
    //         output: process.stdout
    //     });
    //
    //     function callback(value) {
    //         console.log('value: ', value);
    //         expect(value).toEqual('3');
    //         done();
    //     }
    //
    //
    //     player.getInput(callback);
    //     setTimeout(function() {
    //         process.stdin.write("n\r");
    //     }, 1000);
    //
    // });
});