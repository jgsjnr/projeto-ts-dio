let vet: number[] = [1, 2, 5, 7, 9];
function maxMin(vs: number[]): [number, number] {
    let max = vs[0];
    let min = vs[0];
    for(let i of vs){
        if(i > max) max = i;
        if(i < min) min = i;
    };
    return [max, min];
};
console.log(maxMin(vet));


function maxMinb(vs: number[]): [number, number]{
    var minimo = 0;
    var maximo = 0;
    var tam = vs.length
    var i = 0;
    while(i < tam){
        if(minimo < vs[i]) minimo = vs[i]
        if(maximo > vs[i]) maximo = vs[i]
        i++;
    }
    return [maximo, minimo]
}


function all(vs: number[], fn:(a: number, b: number) => boolean): boolean{
    for(let i = 0; i < vs.length; i++){
        if(vs[i+1] != undefined) if(!fn(vs[i], vs[i+1])) return false;
    }
    return true;
}
console.log(all([1, 2, 4, 5, 6, 8], (x, y) => x < y))
console.log(all([1, 2, 4, 5, 6, 8], (x, y) => x > y))

function some(vs: number[], fn:(a: number, b: number) => boolean): boolean{
    for(let i = 0; i < vs.length; i++){
        if(vs[i+1] != undefined)
        if(fn(vs[i], vs[i+1])) return true;
    }
    return false;
}
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x > y))
console.log(some([1, 2, 4, 3, 6, 8], (x, y) => x < y))