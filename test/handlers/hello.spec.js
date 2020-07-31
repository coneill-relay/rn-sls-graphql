const assert = require('assert');

const hello = require('../../handlers/hello').hello;
const data = require('../data/event.data');

describe('hello lambda', () => {
  it('returns status code 200', async () => {
    const returnedValue = await hello(data.sampleEvent, data.sampleContext);
    assert.deepStrictEqual(returnedValue.statusCode, 200);
  })
})