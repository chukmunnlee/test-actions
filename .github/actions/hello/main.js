const core = require('@actions/core')
const github = require('@actions/github')

// random error 1/3 of the time
const prob = Math.floor(Math.random() * 100) 
if (prob <= 33) {
	core.setFailed(`Error probability: ${prob}%`)
	throw new Error(`Error probability: ${prob}%`)
}

const whoToGreet = core.getInput('who-to-greet')
console.info(`Hello ${whoToGreet}. How are you today?`)

const greetTime = (new Date()).toUTCString()
core.setOutput('time', greetTime)

console.info(JSON.stringify(github, any, '\t'))
