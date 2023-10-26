const Message = require("./message.js");
const Command = require("./command.js");

class Rover {
  constructor(position, mode = "NORMAL", generatorWatts = 110) {
    this.position = position;
    this.mode = mode;
    this.generatorWatts = generatorWatts;
  }

  // foreach command in commands
  // processCommand(command)

  receiveMessage(message) {
    let response = { message: message.name, results: [] };

    for (let i = 0; i < message.commands.length; i++) {
      let command = message.commands[i];
      // var result = processCommand(command)
      // results.push(result)

      if (command.commandType === "MOVE" && typeof command.value === "number") {
        if (this.mode === "LOW_POWER") {
         // return ({completed: false})
          response.results.push({ completed: false });
          continue;
        }
        this.position = command.value;
        response.results.push({ completed: true });
      } else if (command.commandType === "MODE_CHANGE") {
        this.mode = command.value;
        response.results.push({ completed: true });
      } else if (command.commandType === "STATUS_CHECK") {
        response.results.push({
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position,
          },
        });
      } else {
        response.results.push({ completed: false });
      }
    }

    return response;
  }
}

module.exports = Rover;
