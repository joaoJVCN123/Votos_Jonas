//git init
// git add (nome ou .)
//git commit -m ("nome entre aspas")

let resposta = document.getElementById("resposta")
let verificar = document.getElementById("verificar")
//nome iguais (class, input, css, js e html) scrun master tem que saber e organizar

verificar.addEventListener('click', ()=>{
    let nome = document.getElementById("nome").value
    let idade = Number(document.getElementById("idade").value)
    let titulo = Number(document.getElementById("titulo").value)

    console.log("Dados do do formulario", nome, idade, titulo)

    const cidadao = new Eleitor()

    cidadao.nome = nome
    cidadao.idade = idade
    cidadao.titulo = titulo

    console.log("Instancia do objeto", cidadao)
    
    let mensagem = cidadao.verificaVoto()

    resposta.innerHTML = ""
    resposta.innerHTML += `O eleitor ${cidadao.nome} <br>`
    resposta.innerHTML += `tem ${cidadao.idade} anos de idade <br>`
    resposta.innerHTML += mensagem 
    resposta.style.color = "Blue"
})
// ()=> igual a function

