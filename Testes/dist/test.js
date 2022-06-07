"use strict";
let vet = [1, 2, 5, 7, 9];
function maxMin(vs) {
    let max = vs[0];
    let min = vs[0];
    for (let i of vs) {
        if (i > max)
            max = i;
        if (i < min)
            min = i;
    }
    ;
    return [max, min];
}
;
console.log(maxMin(vet));
function all(vs, fn) {
    for (let i = 0; i < vs.length; i++) {
        if (vs[i + 1] != undefined)
            if (!fn(vs[i], vs[i + 1]))
                return false;
    }
    return true;
}
console.log(all([1, 2, 4, 5, 6, 8], (x, y) => x < y));
console.log(all([1, 2, 4, 5, 6, 8], (x, y) => x > y));
function some(vs, fn) {
    for (let i = 0; i < vs.length; i++) {
        if (vs[i + 1] != undefined)
            if (fn(vs[i], vs[i + 1]))
                return true;
    }
    return false;
}
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x > y));
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x < y));
