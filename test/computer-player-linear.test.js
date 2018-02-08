const ComputerPlayer = require('../lib/computer-player-linear');

describe('#ComputerPlayerLinear', () => {
    test('should create a new computer player', () => {
        const playerName = 'Computer';
        const counterIcon = '#';
        let computerPlayer = new ComputerPlayer({name: playerName, counterIcon: counterIcon});

        expect(computerPlayer.getName()).toEqual(playerName);
        expect(computerPlayer.getCounterIcon()).toEqual(counterIcon);
    });

    test('should accept an input and return the value 1 for column 1', done => {
        let computerPlayer = new ComputerPlayer({name: 'Computer', counterIcon: '#'});

        function callback(value) {
            expect(value).toEqual(1);
            done();
        }

        computerPlayer.getInput(callback, 5, 5);
    });
});