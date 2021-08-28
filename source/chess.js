'use strict';

/**
  * Returns ASCII chessboard of size N * N characters from '*'
  * 
  * @param {string|number} size - chessboard size
  * @returns {string}
  */
const chess = (size) => {
    if (!Number.isInteger(+size) || size <= 1) {
        return null;
    }

    let chessBoard = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            chessBoard += (i + j) % 2 == 0 ? '*' : ' ';
        }
        chessBoard += '\n';
    }

    return chessBoard;
}
