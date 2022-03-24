const questions = [
    "O que aprendi hoje?",
    "O que me chateou?",
    "O que posso melhorar?",
    "O que me deixou contente hoje?",
    "Quantas pessoas ajudei hoje?"
]

const ask = ( index = 0 )  => {
  process.stdout.write("\n\n" + questions [index] + " > ")
}

ask()

const answers = []

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