const json_file = require('./jokes.json')

const jokes = json_file['jokes']

const getRandomJoke = (jokesArary) => {
    // generates random number, and takes array element with that index
    const jokesArrayMaxIndex = jokesArary.length - 1
    let randomJoke = jokesArary[Math.round(Math.random() * jokesArrayMaxIndex)]
    return randomJoke
}

