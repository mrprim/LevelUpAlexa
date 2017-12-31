const mocha = require('mocha')
const expect = require('expect')

const describe = mocha.describe
const it = mocha.it

const score = require('./score')

describe('score', () => {
  it('computes correctly', () => {
    score.call({
      emit: f => f,
      response: {
        speak: f => f
      },
      attributes: {
        events: [{ type: 'combat' }]
      }
    })
  })
})
