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