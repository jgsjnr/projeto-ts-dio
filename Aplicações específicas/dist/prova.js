"use strict";
//Aluno: José Geraldo da Silva Júnior, RA: 1680482022037, Turma: ADSMA4
console.log("Aluno: José Geraldo da Silva Júnior, RA: 1680482022037, Turma: ADSMA4");
//Implementação de peças simples para uma classe de peças simples
class S {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    //Devolve o nome da peça Simples
    getNome() {
        return this.nome;
    }
    //Devolve o valor da peça Simples
    getValor() {
        return this.valor;
    }
}
//Criação da peça composta
class C {
    constructor() {
        //Lista par onde tem a peça simples e a quantidade de peças
        this.arr = new Array;
    }
    //Insere peças dentro da lista par da peça composta
    insPecas(a, b) {
        this.arr.push([a, b]);
    }
    //Devolve o valor da peça composta considerando multiplicidade somando a quantidade de peças e a quantidade de vezes que a peça foi declarada
    getValor() {
        let sum = 0;
        for (let s of this.arr)
            sum += s[0].getValor() * s[1];
        return sum;
    }
    //Devolve as peças
    getPecas() {
        let x = [];
        for (let s of this.arr)
            x.push(s[0]);
        return x;
    }
    //Dado um valor V devolve todas as peças menores que esse valor
    getV(v) {
        let r = [];
        for (let s of this.arr)
            if (s[0].getValor() < v)
                r.push(s[0]);
        return r;
    }
    //Devolve uma lista não-descrescente
    getAsc() {
        let c = [];
        for (let s of this.arr)
            c.push(s[0]);
        return c.sort((a, b) => a.getValor() - b.getValor());
    }
    //Verifica se existe uma peça simples dentro da peça composta.
    verPecas(k) {
        for (let s of this.arr)
            if (s[0].getNome() == k.getNome())
                return true;
        return false;
    }
    //Dado um predicado verifica retorna todos os objetos dentro desse predicado
    verPredi(pred) {
        let j = [];
        for (let s of this.arr)
            if (pred())
                j.push(s[0]);
        return j;
    }
}
let eng = new S("Engrenagem", 3);
let tab = new S("Tabuleta", 1);
let rsc = new S("Rosca", 5);
let baguio = new C();
baguio.insPecas(eng, 2);
baguio.insPecas(rsc, 3);
baguio.insPecas(tab, 3);
//Devolve o valor da peça composta
console.log("Devolve valor");
console.log(baguio.getValor());
//Devolve o array de peças
console.log("Devolve Peças");
console.log(baguio.getPecas());
//Devovle as peças menores que o numero v dado
console.log("Devolve Peças abaixo do numero");
console.log(baguio.getV(4));
//Devolve uma lista crescente
console.log("Devolve Peças em ordem ascendente");
console.log(baguio.getAsc());
//Dado um predicado devolve algo especifico
console.log("Se o predicado for verdadeiro, então ele executa alguma ação dentro do objeto complexo");
console.log("Verdadeiro: ");
console.log(baguio.verPredi((a = 0, b = 2) => b > a));
console.log("Falso: ");
console.log(baguio.verPredi((a = 0, b = 2) => b < a));
//Verifica se a peça simples existe dentro da peça complexa
console.log("Verifica se a peça existe");
console.log(baguio.verPecas(eng));
