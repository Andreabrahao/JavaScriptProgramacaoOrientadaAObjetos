import User from "./user.js";
import Docente from "./Docente.js";
import Admin from "./Admin.js";

// const novoUser = new User("Dedeco", "dedeco@", "2001");
// console.log(novoUser.exibirInfos());

//importente chamar como uma propriedade, sem os ()

const novoAdmin = new Admin("umbertir", "gaga@", "333");
console.log(novoAdmin.nome);
novoAdmin.nome = "";
console.log(novoAdmin.nome);
