/**
 * The Board class used to generate the board, drop counters into it and check win conditions
 */
class Board {
    constructor(cols = 7, rows = 6, maxCountToWin = 4) {
        this.cols = cols;
        this.rows = rows;
        this.maxCountToWin = maxCountToWin;
        this.board = this.constructor.generate(cols, rows);
    }

    /**
     * Generates an array of undefined slots of a specific size and returns it
     * @param cols
     * @param rows
     * @returns {Array}
     */
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

    /**
     * Renders the board array in ascii to stdout
     */
    render() {
        let bottomRow = '';

        // Render the columns and counters
        this.board.forEach(row => {
            let rowString = '| ';
            row.forEach(column => {
                rowString += (column === undefined ? ' ' : column) + ' | ';
            });

            console.log(rowString);
        });

        // Render the column numbers
        for(let i = 1; i <= this.board[0].length; i++) {
            bottomRow += '  ' + i + ' ';
        }

        console.log(bottomRow);
    }

    /**
     * Adds a counter to a column and returns true if it was a valid move
     * @param col
     * @param counter
     * @returns {boolean}
     */
    dropCounter(col, counter) {
        // Select the actual column as per array index rather than the user input and convert to a number
        let colPrec = Number(col)-1;
        let maxLength = this.board[0].length - 1;

        // Perform validation checks on user input
        if(colPrec < 0 || isNaN(colPrec) || (colPrec > maxLength )) {
            return false;
        } else {
            // Add a counter to the next empty slot
            for(let row = this.board.length-1; row >= 0; row--) {
                if(!this.board[row][colPrec]) {
                    this.board[row][colPrec] = counter;
                    return true;
                }
            }
        }

    }

    /**
     * Gets number of columns in the board
     * @returns {number}
     */
    getCols () {
        return this.cols;
    }

    /**
     * Gets number of rows in the board
     * @returns {number}
     */
    getRows () {
        return this.rows;
    }

    /**
     * Checks vertical, horizontal and diagonal row counts of the counters and returns true
     * if number of counters in a row matches maximum number of counters required to win
     * @param counter
     * @returns {boolean}
     */
    checkWin(counter) {
        let won = false;

        // Check vertical
        if(!won) {
            won = this._checkVertical(counter);
        }

        // Check horizontal
        if(!won) {
            won = this._checkHorizonal(counter);
        }

        // Check diagonal up
        if(!won) {
            won = this._checkDiagonal(counter, -1);
        }

        // Check diagonal down
        if(!won) {
            won = this._checkDiagonal(counter, 1);
        }

        return won;
    }

    /**
     * Vertical check returns true if counters count is equal to the maximum rows required to win
     * @param counter
     * @returns {boolean}
     * @private
     */
    _checkVertical(counter) {
        let counterCnt = 0;

        for(let row=0; row < this.rows; row++) {
            for(let col=0; col < this.cols; col++ ) {
                if(this.board[row][col] === counter) {
                    counterCnt++;

                    // If we have the right count, break out and return true
                    if(counterCnt >= this.maxCountToWin) {
                        return true;
                    }
                } else {
                    counterCnt = 0;
                }
            }
        }

        return false;
    }

    /**
     * Horizontal check returns true if counters count is equal to the maximum rows required to win
     * @param counter
     * @returns {boolean}
     * @private
     */
    _checkHorizonal(counter) {
        let counterCnt = 0;

        for(let col = 0; col < this.cols; col++) {
            for(let row=0; row < this.rows; row++) {
                if(this.board[row][col] === counter) {
                    counterCnt++;

                    // If we have the right count, break out and return true
                    if(counterCnt >= this.maxCountToWin) {
                        return true;
                    }
                } else {
                    counterCnt = 0;
                }
            }
        }

        return false;
    }

    /**
     * Diagonal check returns true if counters count is equal to the maximum rows required to win
     * Direction can be -1 or 1 to check up or down diagonal rows
     * @param counter
     * @param direction
     * @returns {boolean}
     * @private
     */
    _checkDiagonal(counter, direction) {
        for(let col = 0; col < this.cols; col++) {
            for (let row = 0; row < this.rows; row++) {
                if (this.board[row][col] === counter) {
                    let counterCnt = 1;
                    counterCnt += this._checkSlot(row, col, counter, direction);

                    // If we have the right count, break out and return true
                    if (counterCnt >= this.maxCountToWin) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    /**
     * Recursively check slots for matching counters and returns a count
     * @param row
     * @param col
     * @param counter
     * @param direction
     * @returns {number}
     * @private
     */
    _checkSlot(row, col, counter, direction) {
        let counterCnt = 0;
        let rowNext = row + direction;
        let colNext = col + 1;

        // If there's a matching counter and the array element is valid, check the next counter in a diagonal
        if(this.board[rowNext] && this.board[rowNext][colNext] && this.board[rowNext][colNext] === counter) {
            counterCnt++;
            counterCnt += this._checkSlot(rowNext, colNext, counter, direction);
        }

        return counterCnt;
    }
}

module.exports = Board;