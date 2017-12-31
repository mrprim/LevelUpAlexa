const levelUp = require('./levelUp')
const score = require('./score')

module.exports = {
  'LaunchRequest': function () {
    this.emit('Launch')
  },
  'Launch': function () {
    const speechOutput = this.t('LAUNCH_PROMPT')
    this.emit(':ask', speechOutput)
  },
  'LevelUpIntent': function () {
    this.emit('LevelUp')
  },
  'ScoreIntent': function () {
    this.emit('Score')
  },
  'LevelUp': function () {
    levelUp.call(this)
  },
  'Score': function () {
    score.call(this)
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = this.t('HELP_MESSAGE')
    const reprompt = this.t('HELP_MESSAGE')
    this.emit(':ask', speechOutput, reprompt)
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'))
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'))
  }
}
