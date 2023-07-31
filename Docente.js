import User from "./user.js";

class Docente extends User {
    constructor(nome, email, nascimento, role = "docente", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    aprovaEstudante(estudante, curso) {
        return `estudante ${estudante} aprovado(a) no curso ${curso}`;
    }
}

const novoDocente = new Docente("Dedezin", "aa@oo", "2013");
console.log(novoDocente);
console.log(novoDocente.exibirInfos());
console.log(novoDocente.aprovaEstudante("Juliana", "JS"));
