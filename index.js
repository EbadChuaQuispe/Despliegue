const http = require('http');

function requestController(req, res) {
  console.log("Bienvenidos al curso");
}

const PORT = process.env.PORT || 3000;

const server = http.createServer(requestController);

server.listen(PORT, function () {
  console.log("Aplicación corriendo en: " + PORT);
});
