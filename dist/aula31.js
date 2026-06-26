// Aula sobre namespaces
var Animais;
(function (Animais) {
    class Animal {
        nome;
        constructor(nome) {
            this.nome = nome;
        }
    }
    Animais.Animal = Animal;
})(Animais || (Animais = {}));
let cachorro = new Animais.Animal("Cachorro Caramelo");
console.log(cachorro);
export {};
//# sourceMappingURL=aula31.js.map