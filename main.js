let nomeUsuário = ""; 
let elemento = document.querySelector ("#nome-usuário");

while(nomeUsuario == ""){
    nomeUsário = prompt("Qual o seu nome?");
}

if(nomeUsuário == null){
    elemento.textContent = "Seja muito bem-vindo.";
}else{
    elemento.textContent = nomeUsuário;
}

