const Message = require('./message.js')
const Command = require('./command.js')


class Rover {
   constructor(position, mode = 'NORMAL', generatorWatts = 110) {
      
      this.position = position;
      this.mode = mode
      this.generatorWatts = generatorWatts
   }

   receiveMessage(message) {
     let results = [];
      
     if(message.commands.commandType === 'MOVE') {
      if(message.commands.value === 'number'){
      this.position = message.commands.value;
      results.push({completed: true})
     } else {
      results.push({completed: false})
     }     
   } else if(message.commands.commandType === 'STATUS_CHECK'){
      results.push({completed: true, roverStatus: {mode: this.mode, generatorWatts: this.generatorWatts, position: this.position}})
   } else if(message.commands.commandType === 'MODE_CHANGE'){
      this.mode = message.commands.value;
      results.push({completed: true})
   } 
   // else {
   //    results.push({completed: false})
   // }
      return{ 
   message: message.name,
   results: results


      }
   }
}


console.log(response);
module.exports = Rover;