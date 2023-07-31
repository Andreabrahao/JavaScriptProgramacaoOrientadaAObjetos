import User from "./user.js";

class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}

const novoAdmin = new Admin("Andrezin", "arroba@", "1995");
console.log(novoAdmin.criarCurso("JS", 20));

// console.log(novoAdmin);
// console.log(novoAdmin.exibirInfos());
