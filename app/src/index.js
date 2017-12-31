const Alexa = require('alexa-sdk')
const languageStrings = require('./lang')
const handlers = require('./handlers')

const APP_ID = 'amzn1.ask.skill.4ca3ab24-8de2-4b4e-acda-080cc1278b6b'

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context)
  alexa.appId = APP_ID
  alexa.resources = languageStrings
  alexa.registerHandlers(handlers)
  alexa.execute()
}
