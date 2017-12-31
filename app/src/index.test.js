const mocha = require('mocha')
const expect = require('expect')

const describe = mocha.describe
const it = mocha.it

const svc = require('./index')

describe('main function', () => {
  it('integration', () => {
    svc.handler({
      'session': {
        'new': false,
        'sessionId': 'SessionId.65e9f7ef-8da2-49ff-9be2-623f87e3204e',
        'application': {
          'applicationId': 'amzn1.ask.skill.4ca3ab24-8de2-4b4e-acda-080cc1278b6b'
        },
        'attributes': {},
        'user': {
          'userId': 'amzn1.ask.account.AFRNOA5WZPB5TPQFZ725OXHGQSULPUIX7QPDEOFR7B2EISQMDKRKGJ5NNOZW3JONYL6NCGV7CLLEGYFOQPAUX2UG6EFOT7YZ4B57ASJLNJI4RJZRFBEYHR4K7HTBFBY7AMJRKISCEFEDKH6UHOEJE5CF3YSYRQPUH3QZO5JA35LPL7RZAUMQJZYSHUP26QRGDKBYPBU432OVE5A'
        }
      },
      'request': {
        'type': 'IntentRequest',
        'requestId': 'EdwRequestId.98373513-9bf1-4cb6-a23d-4d3fbd73f36d',
        'intent': {
          'name': 'LevelUpIntent',
          'slots': {}
        },
        'locale': 'en-US',
        'timestamp': '2017-12-31T02:52:51Z'
      },
      'context': {
        'AudioPlayer': {
          'playerActivity': 'IDLE'
        },
        'System': {
          'application': {
            'applicationId': 'amzn1.ask.skill.4ca3ab24-8de2-4b4e-acda-080cc1278b6b'
          },
          'user': {
            'userId': 'amzn1.ask.account.AFRNOA5WZPB5TPQFZ725OXHGQSULPUIX7QPDEOFR7B2EISQMDKRKGJ5NNOZW3JONYL6NCGV7CLLEGYFOQPAUX2UG6EFOT7YZ4B57ASJLNJI4RJZRFBEYHR4K7HTBFBY7AMJRKISCEFEDKH6UHOEJE5CF3YSYRQPUH3QZO5JA35LPL7RZAUMQJZYSHUP26QRGDKBYPBU432OVE5A'
          },
          'device': {
            'supportedInterfaces': {}
          }
        }
      },
      'version': '1.0'
    }, { fail: f => f, succeed: f => f })
  })
})
