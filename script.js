let botao = document.querySelector("#botao")
let msg= document.querySelector("#msg")

botao.addEventListener("click", mensagem)
msg.style.color = "red"

function mensagem(){
    msg.innerHTML = "Olá! Que bom ter você aqui! Seja muito bem-vindo(a) a minha página web."
}