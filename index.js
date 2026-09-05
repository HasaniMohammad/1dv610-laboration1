import { get } from 'node:http'
import { stdin, stdout } from 'node:process'
import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

async function getHistoricalEvent(month, day) {
  const url = `https://api.wikimedia.org/feed/v1/wikipedia/en/onthisday/events/${month}/${day}`

  const response = await fetch(url)
  const data = await response.json()

  return data.events[0]
}

const frog = `
       @..@
      (----)
     ( >__< )
     ^^ ~~ ^^
`

rl.question('Enter your name: ', async (name) => {
  const today = new Date()

  const month = today.getMonth() + 1
  const day = today.getDate()

  const event = await getHistoricalEvent(month, day)

  console.log(frog)
  console.log(`Welcome back, ${name}!`)
  console.log(`Today is ${month}/${day}`)
  console.log(`On this day in ${event.year}`)

  console.log(`${event.text}`)

  rl.close()
})