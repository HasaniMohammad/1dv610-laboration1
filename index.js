import { stdin, stdout } from 'node:process'
import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})



rl.question('Enter your name: ', (name) => {
  const today = new Date()

  const month = today.getMonth() + 1
  const day = today.getDate()

  console.log(`Welcome back, ${name}!`)
  console.log(`Today is ${month}/${day}`)

  rl.close()
})