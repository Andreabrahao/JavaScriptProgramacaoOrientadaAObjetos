const user = {
    nome: "Andre",
    email: "A@A.com",
    nascimento: "2023",
    role: "estudante",
    activo: true,
    exibirInfos: function () {
        console.log(this.nome, this.email);
    },
};

const admin = {
    nome: "Dedequinha",
    email: "M@M.zura",
    role: "Admin",
    criarCurso() {
        console.log("Curso criado!");
    },
};

Object.setPrototypeOf(admin, user);
admin.criarCurso();
admin.exibirInfos();
