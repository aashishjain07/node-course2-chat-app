var expect = require('expect');

var {generateMessage} = require('./message');

describe('generate', () => {
it('should generate correct message object', () => {
    var from = 'Jen';
    var text = 'some message';
    var message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message.from).toInclude({from, text});

    //store res in variable
//assert from match
//assert text match
//assert createdAt is number

});
});
