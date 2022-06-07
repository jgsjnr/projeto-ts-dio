"use strict";
class Peca {
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    getNome() {
        return this.nome;
    }
    getValor() {
        return this.valor;
    }
}
class Simples extends Peca {
}
class Composta extends Peca {
    constructor(nome, valor) {
        super(nome, valor);
        this.mp = new Map();
    }
    setPecas(a, b) {
        this.mp.set(a, b);
    }
    getValor() {
        for (let s of this.mp) {
            this.valor += s[0].getValor() * s[1];
        }
        return this.valor;
    }
    getPecas() {
        const rmp = new Map();
        for (let s of this.mp) {
            rmp.set(s[0].getNome(), s[0].getValor());
        }
        return rmp;
    }
    getValorV(v) {
        const rmp = new Map();
        for (let s of this.mp) {
            if (s[0].getValor() < v)
                rmp.set(s[0].getNome(), s[0].getValor());
        }
        return rmp;
    }
    getAsc() {
        let rmp = new Map();
        for (let s of this.mp) {
            rmp.set(s[0].getNome(), s[0].getValor());
        }
        let r = new Map([...rmp.entries()].reverse());
        return r;
    }
    verPredi(pred) {
        let rmp = new Map();
        for (let s of this.mp)
            if (pred())
                rmp.set(s[0].getNome(), s[0].getValor());
        return rmp;
    }
    verPecas(peca) {
        const pecas = new Map();
        for (let s of this.mp)
            if (s[0].constructor.name != "Composta") {
                if (s[0].getNome() == peca.getNome()) {
                    pecas.set(s[0].getValor(), s[0]);
                }
            }
            else {
            }
        return pecas;
    }
}
let eng = new Simples("Engrenagem", 1);
let rosca = new Simples("Rosca", 2);
let com = new Composta("Parafusadeira", 2);
let broca = new Composta("Broca", 2);
com.setPecas(eng, 2);
com.setPecas(rosca, 4);
console.log(com.getValor());
console.log(com.getValorV(3));
console.log(com.getAsc());
console.log(com.getPecas());
console.log(com.verPecas(eng));
