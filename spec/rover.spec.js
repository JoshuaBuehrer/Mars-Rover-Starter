const Rover = require('../rover.js');
const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.


describe("Rover class", function() {

test('constructor sets position and default values for mode and generatorWatts', () => {
output = new Rover(42069,'NORMAL', 110);
expect(output).toEqual(new Rover(42069,'NORMAL',110))
});

test('response returned by receiveMessage contains the name of the message', () => {
  messageTest1 = new Message('take this, its dangerous to go alone'); 
  roverTest1 = new Rover(42069);
  received = roverTest1.receiveMessage(messageTest1)
  expect(received.message).toEqual('take this, its dangerous to go alone')
});

test('response returned by receiveMessage includes two results if two commands are sent in the message', () => {
  commandTest1 = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
  messageTest2 = new Message('filler', commandTest1);
  roverTest2 = new Rover(12345);
  received = roverTest2.receiveMessage(messageTest2)
  expect(received.results.length).toEqual(2)
});

});
