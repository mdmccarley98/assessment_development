const http = require("http");

const calculate = () => {
  let sum = 0;
  for (let i = 0; i < 1e9; i++) {
    sum += i;
  }
  return sum;
};

const server = http.createServer();

server.on("request", (req, res) => {
  if (req.url === "/api/v1/calculate") {
    const sum = calculate();
    return res.end(`Sum is ${sum}`);
  } else {
    res.end("Ok");
  }
});

server.listen(3000);