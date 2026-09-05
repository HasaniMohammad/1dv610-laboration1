import { stdin, stdout } from 'node:process'
import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

rl.question('Enter your name: ', (name) => {
  console.log(`Welcome back, ${name}!`)
  rl.close()
})