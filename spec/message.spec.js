const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {

    test('throws error if a name is NOT passed into the constructor as the first parameter', () => {
        expect( function() { new Message();}).toThrow(new Error(`name required`));
    });

    test(`constructor sets name`, () => {
        let output1 = new Message('Jimmy');
        expect(output1.name).toBe('Jimmy')
    });

    test('contains a commands array passed into the constructor as the 2nd argument', () => {
        let output2 = new Message('filler',['command1', 'command2']);
        expect(output2.commands).toEqual(['command1', 'command2'])
    })
});
