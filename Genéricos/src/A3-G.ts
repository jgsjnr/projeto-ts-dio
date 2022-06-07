//José Geraldo da Silva Júnior - RA: 1680482022037
function some<Generic>(vs: Generic[], fn:(a: Generic, b: Generic) => boolean): boolean{
    for(let i = 0; i < vs.length; i++){
        if(vs[i+1] != undefined)
        if(fn(vs[i], vs[i+1])) return true;
    }
    return false;
}
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x > y))
console.log(some(["B", "A", "C"], (x, y) => x > y))
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x > y))
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x < y))
