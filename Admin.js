import User from "./user.js";

export default class Admin extends User {
    constructor(nome, email, nascimento, role = "admin", ativo = true) {
        super(nome, email, nascimento, role, ativo);
    }

    nomeAdmin() {
        return `${this.nome}`;
    }

    exibirInfos() {
        return `${this.nome}, ${this.role}, ${this.ativo}`;
    }

    criarCurso(nomeDoCurso, vagas) {
        return `Curso de ${nomeDoCurso} criado com ${vagas} vagas`;
    }
}
