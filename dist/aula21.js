// Aula 2 sobre herança
class Funcionario {
    id;
    nome;
    idade;
    funcao;
    constructor(nome, idade, funcao) {
        this.id = this.gerarId(),
            this.nome = nome,
            this.idade = idade,
            this.funcao = funcao;
    }
    gerarId() {
        let id = Math.round(Math.random() * 1000) + 1;
        return id;
    }
}
class Programador extends Funcionario {
    modelo;
    constructor(nome, idade, funcao, modelo) {
        super(nome, idade, funcao);
        this.modelo = modelo;
    }
}
const pedro = new Programador("Pedro", 21, "Programador", "Híbrido");
console.log(pedro);
export {};
//# sourceMappingURL=aula21.js.map