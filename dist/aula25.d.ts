declare class Funcionario {
    id: number;
    nome: string;
    private cargo;
    constructor(nome: string, cargo: string);
    gerarId(): number;
    set setNome(nome: string);
}
declare class Programador extends Funcionario {
    private modalidade;
    constructor(nome: string, cargo: string, modalidade: string);
    get getModalidade(): string;
}
export { Funcionario, Programador };
//# sourceMappingURL=aula25.d.ts.map