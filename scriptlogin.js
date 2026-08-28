const user = "ellaGordinha"
const senha = "anakin"

 function pegar() {
    let tentativauser = document.getElementById("usuario").value
    let tentativasenha = document.getElementById("Senha").value

    if (tentativauser == user & tentativasenha == senha) {
      window.location.href = "index.html";
    } else {
      window.alert ("usuario ou senha incorretos")
    }
  }