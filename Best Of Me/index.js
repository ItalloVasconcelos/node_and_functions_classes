// Criando a variável com uma array para as perguntas
const questions = [
    "O que aprendi hoje?",
    "O que me chateou?",
    "O que posso melhorar?",
    "O que me deixou contente hoje?",
    "Quantas pessoas ajudei hoje?"
]
// Criando a função para começar na pergunta 1 no index 0 da array e adicionar um '>'
const ask = ( index = 0 )  => {
  process.stdout.write("\n\n" + questions [index] + " > ")
}
// Chamando a função
ask()

// Criando uma array vazia para adicionar as respostas
const answers = []

//Criando a função onde armazena os dados e transforma em strings. Depois passa por um if para saber se as respostas são maiores que as perguntas, caso seja positivo o programa continua rodando, se não o programa da um exit
process.stdin.on("data", data => {
    process.stdout.write( data.toString().trim() + "\n")
    answers.push(data.toString().trim() + "\n")
    if(answers.length < questions.length) {
        ask(answers.length)
    } else {
        console.log(answers)
        process.exit()
    }
})

//Criando uma visualização mais organizada das respostas.
process.on('exit', () => {
    console.log(`Bacana Itallo!
    O que você aprendeu hoje?
    ${answers[0]}

    O que te aborreceu e como você poderia melhorar foi:
    ${answers[1]}
    
    O que te deixou feliz hoje:
    ${answers[2]}

    Você ajudou ${answers[3]} pessoas hoje!!

    Volte amanhã para novas reflexões
    `)
})