
class Board {
    constructor(cols, rows) {
        this.board = this.generate(cols, rows);
    }

    generate (cols, rows) {
        let boardArray = [];
        for(let row = 0; row < rows; row++) {
            let rowArray = [];
            boardArray.push(rowArray);
            for (let col = 0; col < cols; col++ ) {
                boardArray[row].push(undefined);
            }
        }

        return boardArray;
    }

    render () {
        this.board.forEach(row => {
           let rowString = '| ';
           row.forEach(column => {
               rowString += (column === undefined ? ' ' : column) + ' | ';
           });

            console.log(rowString);
        });
    }
}

module.exports = Board;