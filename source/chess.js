'use strict'

const chess = (n) => {
    if (!Number.isInteger(+n) || n <= 1) {
        return null;
    }

    let chessBoard = '';
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            chessBoard += (i + j) % 2 == 0 ? '*' : ' ';
        }
        chessBoard += '\n';
    }

    return chessBoard;
}
