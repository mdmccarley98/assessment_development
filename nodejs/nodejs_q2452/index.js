const fs = require("fs");
const zlib = require("zlib");
const file = 'info.txt';

const { Transform } = require("stream");

const printProgress = new Transform({
  transform(chunk, encoding, callback) {
    process.stdout.write("processing\n");
    callback(null, chunk);
  }
});

fs.createReadStream(file)
  .pipe(zlib.createGzip())
  .pipe(printProgress)
  .pipe(fs.createWriteStream(file + ".zip"))
  .on("finish", () => console.log("File processing complete"));