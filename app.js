const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html><body>Hi lalit</body></html>");
  res.end();
});

server.listen(3000);
