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
