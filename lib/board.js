class Board {
    constructor(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.board = this.constructor.generate(cols, rows);
    }

    static generate(cols, rows) {
        let boardArray = [];
        for (let row = 0; row < rows; row++) {
            let rowArray = [];
            boardArray.push(rowArray);
            for (let col = 0; col < cols; col++) {
                boardArray[row].push(undefined);
            }
        }

        return boardArray;
    }

    render() {
        let bottomRow = '';

        this.board.forEach(row => {
            let rowString = '| ';
            row.forEach(column => {
                rowString += (column === undefined ? ' ' : column) + ' | ';
            });

            console.log(rowString);
        });

        for(let i = 1; i <= this.board[0].length; i++) {
            bottomRow += '  ' + i + ' ';
        }

        console.log(bottomRow);
    }

    dropCounter(col, counter) {
        let colPrec = Number(col)-1;
        let maxLength = this.board[0].length - 1;

        if(colPrec < 0 || isNaN(colPrec) || (colPrec > maxLength )) {
            return false;
        } else {
            for(let row = this.board.length-1; row >= 0; row--) {
                if(!this.board[row][colPrec]) {
                    this.board[row][colPrec] = counter;
                    return true;
                }
            }
        }

    }

    getCols () {
        return this.cols;
    }

    checkWin(counter) {
        return false;
    }
}

module.exports = Board;