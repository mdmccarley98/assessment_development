const { spawn } = require("child_process");

const files = spawn("find . -type f | wc -l");

console.log(`Number of files ${files}`);