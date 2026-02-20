const http = require('http');

http.createServer((req, res) => {
  res.write("Hello from GitHub CI/CD 🚀");
  res.end();
}).listen(3000);
