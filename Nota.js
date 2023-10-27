alert("Bem-vindo ao Media 4 Nota")

const nota1 = Number(prompt("Digite sua 1º Nota:  "))
const nota2 = Number(prompt("Digite sua 2º Nota:  "))
const nota3 = Number(prompt("Digite sua 3º Nota:  "))
const nota4 = Number(prompt("Digite sua 4º Nota:  "))

if (nota1 < 0 || nota1 > 10 ||
    nota1 < 0 || nota1 > 10 ||
    nota1 < 0 || nota1 > 10 ||
    nota1 < 0 || nota1 > 10) {
    alert("Por Favor, inserir um número de 0 a 10")
}

else {
    let adicao = (nota1 + nota2 + nota3 + nota4)
    let Media = (adicao / 4)


    if (Media < 5) {
    alert(`Sua nota foi ${Media}, Você foi Reprovado!`)
}
    else if (Media < 7) {
    alert(`Sua nota foi ${Media}, Você está de Recuperação!`)
}

    else {
    alert(`Sua nota foi ${Media}, Você está Aprovado!!!`)
    }
}
