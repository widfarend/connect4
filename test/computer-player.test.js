const ComputerPlayer = require('../lib/computer-player');

describe('#ComputerPlayerDumb', () => {
    test('should create a new computer player', () => {
        const playerName = 'Computer';
        const counterIcon = '#';
        let computerPlayer = new ComputerPlayer({name: playerName, counterIcon: counterIcon});

        expect(computerPlayer.getName()).toEqual(playerName);
        expect(computerPlayer.getCounterIcon()).toEqual(counterIcon);
    });

    test('should accept an input and return a random value', done => {
        let computerPlayer = new ComputerPlayer({name: 'Computer', counterIcon: '#'});

        function callback(value) {
            expect(value).toBeLessThan(6);
            done();
        }

        computerPlayer.getInput(callback, 5);
    });
});