abstract class Peca{
    constructor(public nome: string, public valor: number){
    }
    getNome(): string{
        return this.nome
    }
    getValor(): number{
        return this.valor
    }
}

class Simples extends Peca{
}

class Composta extends Peca{
    private mp = new Map<Peca, number>();
    constructor(nome: string, valor: number){
        super(nome, valor);
    }
    setPecas(a: Peca, b: number): void{
        this.mp.set(a, b)
    }
    getValor(): number {
        for(let s of this.mp){
            this.valor += s[0].getValor()*s[1]
        }
        return this.valor
    }
    getPecas(): Map<string, number>{
        const rmp = new Map<string, number>()
        for(let s of this.mp){
            rmp.set(s[0].getNome(), s[0].getValor())
        }
        return rmp;
    }
    getValorV(v: number): Map<string, number>{
        const rmp = new Map<string, number>()
        for(let s of this.mp){
            if(s[0].getValor()<v) rmp.set(s[0].getNome(), s[0].getValor())
        }
        return rmp
    }
    getAsc(): Map<string, number>{
        let rmp = new Map<string, number>()
        for(let s of this.mp){
            rmp.set(s[0].getNome(), s[0].getValor())
        }
        let r = new Map([...rmp.entries()].reverse())
        return r;
    }
    verPredi(pred: () => boolean): Map<string, number>{
        let rmp = new Map<string, number>()
        for(let s of this.mp) if(pred()) rmp.set(s[0].getNome(), s[0].getValor())
        return rmp
    }
    verPecas(peca: Peca): Map<number, Peca>{
        const pecas = new Map<number, Peca>()
        for(let s of this.mp)
        if(s[0].constructor.name != "Composta"){
            if(s[0].getNome() == peca.getNome()) {
                pecas.set(s[0].getValor(), s[0])
            }  
        }else{
            
        }
        return pecas
    }
}

let eng = new Simples("Engrenagem", 1)
let rosca = new Simples("Rosca", 2)

let com = new Composta("Parafusadeira", 2)
let broca = new Composta("Broca", 2)


com.setPecas(eng, 2)
com.setPecas(rosca, 4)



console.log(com.getValor())
console.log(com.getValorV(3))
console.log(com.getAsc())
console.log(com.getPecas())
console.log(com.verPecas(eng))