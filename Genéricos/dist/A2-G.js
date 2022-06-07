"use strict";
//José Geraldo da Silva Júnior - RA: 1680482022037
function all(vs, fn) {
    for (let i = 0; i < vs.length; i++) {
        if (vs[i + 1] != undefined)
            if (!fn(vs[i], vs[i + 1]))
                return false;
    }
    return true;
}
console.log(all([1, 2, 4, 5, 6, 8], (x, y) => x < y));
// console.log(all(xs, (x, y) => x > y))
console.log(all([1, 2, 4, 5, 6, 8], (x, y) => x > y));
// let xs: number[] = [1, 2, 4, 5, 6, 8];
// let xs: number[] = [8, 6, 5, 4, 2, 1];
// let xs: string[] = ["A", "B"]
