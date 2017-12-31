module.exports = function () {
  const events = this.attributes['events'] || []
  const sb = events.reduce((sb, event) => {
    sb[event.type] = sb[event.type] || 0
    sb[event.type]++
    return sb
  }, {})

  const speak = []
  speak.push('You have been on ' + events.length + ' adventures.')
  speak.push('You have fought ' + n(sb.combat) + ' monsters.')
  speak.push('You have looted ' + n(sb.treasure) + ' treasures!')

  this.response.speak(speak.join('  '))
  this.shouldEndSession = false
  this.emit(':responseReady')
}

const n = x => x || 0
