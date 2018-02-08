const Board = require('../lib/board.js');

describe('#Board', () => {
    test('should create a new board', () => {
        let cols = 100;
        let rows = 50;
        let maxCountersToWin = 25;

        let board = new Board(cols, rows, maxCountersToWin);

        expect(board.getCols()).toEqual(cols);
        expect(board.getRows()).toEqual(rows);
    });

    test('should generate a 10x4 array', () => {
        let cols = 10;
        let rows = 4;

        let boardArray = Board.generate(cols, rows);

        expect(Array.isArray(boardArray)).toBe(true);
        expect(boardArray.length).toEqual(rows);
        boardArray.forEach(row => expect(row.length).toEqual(cols));
    });

    test('should drop a counter into valid space on the board', () => {
        let cols = 5;
        let rows = 5;
        let maxCountersToWin = 2;

        let board = new Board(cols, rows, maxCountersToWin);

        expect(board.dropCounter(3, '@')).toBe(true);
    });

    test('should fail to drop a counter into invalid space on the board', () => {
        let cols = 5;
        let rows = 5;
        let maxCountersToWin = 2;

        let board = new Board(cols, rows, maxCountersToWin);

        expect(board.dropCounter(8, '@')).not.toBe(true);
    });

    test('should fail to drop a counter due to invalid input', () => {
        let cols = 5;
        let rows = 5;
        let maxCountersToWin = 2;

        let board = new Board(cols, rows, maxCountersToWin);

        expect(board.dropCounter('badinput', '@')).not.toBe(true);
    });

    test('should win on a horizontal check', () => {
        let cols = 5;
        let rows = 5;
        let maxCountersToWin = 2;

        let board = new Board(cols, rows, maxCountersToWin);

        board.dropCounter('1', '@');
        board.dropCounter('2', '@');

        expect(board.checkWin('@')).toBe(true);
    });

    test('should not win on a horizontal check', () => {
        let cols = 5;
        let rows = 5;
        let maxCountersToWin = 2;

        let board = new Board(cols, rows, maxCountersToWin);

        board.dropCounter('1', '@');
        board.dropCounter('2', '#');

        expect(board.checkWin('@')).not.toBe(true);
    });

    test('should win on a vertical check', () => {
        let cols = 5;
        let rows = 5;
        let maxCountersToWin = 2;

        let board = new Board(cols, rows, maxCountersToWin);

        board.dropCounter('1', '@');
        board.dropCounter('1', '@');

        expect(board.checkWin('@')).toBe(true);
    });

    test('should not win on a vertical check', () => {
        let cols = 5;
        let rows = 5;
        let maxCountersToWin = 2;

        let board = new Board(cols, rows, maxCountersToWin);

        board.dropCounter('1', '@');
        board.dropCounter('1', '#');

        expect(board.checkWin('@')).not.toBe(true);
    });

    test('should win on an upward diagonal check', () => {
        let cols = 5;
        let rows = 5;
        let maxCountersToWin = 2;

        let board = new Board(cols, rows, maxCountersToWin);

        board.dropCounter('1', '@');
        board.dropCounter('2', '#');
        board.dropCounter('2', '@');

        expect(board.checkWin('@')).toBe(true);
    });

    test('should win on a downward diagonal check', () => {
        let cols = 5;
        let rows = 5;
        let maxCountersToWin = 2;

        let board = new Board(cols, rows, maxCountersToWin);

        board.dropCounter('1', '#');
        board.dropCounter('1', '@');
        board.dropCounter('1', '@');

        expect(board.checkWin('@')).toBe(true);
    });


});