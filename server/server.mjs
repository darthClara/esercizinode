const http = require("http")
const server = http.createServer((req, res) => {
res.write("Ho creato un server, che emozione");
res.end();
})

server.listen(3000)