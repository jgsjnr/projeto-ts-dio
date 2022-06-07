const log = console.log

function some(vs: number[], fn:(a: number, b: number) => boolean): boolean{
    for(let i = 0; i < vs.length; i++){
        if(vs[i+1] != undefined)
        if(fn(vs[i], vs[i+1])) return true;
    }
    return false;
}
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x > y))
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x < y))


// function some(vs: number[], fn:(a: number, b: number) => boolean): boolean{
//     let t: boolean = false;
//     for(let i = 0; i < vs.length; i++){
//         if(vs[i+1] != undefined) t = fn(vs[i], vs[i+1]);
//         if(t) return true;
//     }
//     return false;
// }

// log("a: " + vs[i])
// log("b: " + vs[i+1])
