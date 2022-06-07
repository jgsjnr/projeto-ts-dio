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
console.log(all([1, 2, 4, 5, 6, 8], (x, y) => x > y));
// function all(vs: number[], fn:(a: number, b: number) => boolean): boolean{
//     let r: boolean = false;
//     for(let i = 0; i < vs.length; i++){
//         if(vs[i+1] != undefined) r = fn(vs[i], vs[i+1]);
//         if(!r) return false;
//     }
//     return true;
// }
// log("a: ", vs[i])
// log("b: ", vs[i+1])
