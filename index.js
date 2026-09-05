import readline from 'node:readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

/**
 * Fetches a historical event that happened on a given month and day.
 *
 * @param {number} month - The month of the event, from 1 to 12.
 * @param {number} day - The day of the month.
 * @returns {Promise<Object>} A historical event containing information
 * about the event, such as its year and description.
 */
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