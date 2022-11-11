const fs = require('fs');
const EventEmitter = require('events');

const readFile = async filePath => {
  try {
    const data = await fs.promises.readFile(filePath, 'utf8');
    return data;
  }
  catch(err) {
    console.log(err);
  }
}

class ReadEvents extends EventEmitter {
  async execute(asyncFunc, ...args) {
    this.emit('begin');
    try {
      const data = await asyncFunc(...args);
      this.emit('data', data);
      this.emit('end');
    } catch(err) {
      this.emit('error', err);
    }
  }
}
const readEvents = new ReadEvents();

readEvents.on('begin', () => console.log('About to execute'));
readEvents.on('end', () => console.log('Done with execute'));
readEvents.on('data', (data) => console.log('data:', data));

readEvents.execute(readFile, './data.txt');