module.exports = function () {
  const events = this.attributes['events'] || []
  const event = getEvent()
  events.push(event)

  this.attributes['events'] = events

  this.response.speak(event.message)
  this.shouldEndSession = false
  this.emit(':responseReady')
}

function getEvent () {
  const chance = Math.random()

  if (chance > 0.5) {
    return { type: 'treasure', message: 'You discovered treasure!' }
  } else {
    return { type: 'combat', message: 'You fought a monster!' }
  }
}
