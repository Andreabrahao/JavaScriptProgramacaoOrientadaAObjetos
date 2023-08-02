Heranca de prototipo

user.exibirInfos();
const exibir = user.exibirInfos;
exibir();

const exibir = function () {
console.log(this.nome);
};

const exibirNome = exibir.bind(user);
exibirNome();
exibir();

No console do chrome:
admin._proto_
admin._proto_._proto_
admin._proto_._proto_._proto_

Na criacao de modelos a function recebe o nome em letras maiusculas.

Construtor: (from new.js)
const novoUser = new User("Andre", "AA@jujubileu");
console.log(novoUser.exibirInfos());

//Modelo de heranca de prototipo
const novoUser = new User("Andre", "aa@jaja", "2023");
console.log(novoUser);
console.log(novoUser.exibirInfos());

console.log(User.prototype.isPrototypeOf(novoUser));

Modelo de heranca de prototipo

from Admin.js
Super class = User

Encapsulamento: Acao de esconder algum atributo de uma classe.

'#' e um atributo privado, ele permite que nao sejam alteradas as propriedades da classe.

#montaOjbUser() {
// return {
// nome: this.#nome,
// email: this.#email,
// nascimento: this.#nascimento,
// role: this.#role,
// ativo: this.#ativo,
// };
}

O metodo GET evita acoplamento, evitando assim que o codigo seja refatorado.
Obs.: O GET e uma propriedade acessora.
