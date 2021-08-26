'use strict'

function chess(n) {
    if (!Number.isInteger(+n) || n <= 1) return null

    let board = '';
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            board += (i + j) % 2 == 0 ? '*' : ' '
        }
        board += '\n';
    }

    return board;
}