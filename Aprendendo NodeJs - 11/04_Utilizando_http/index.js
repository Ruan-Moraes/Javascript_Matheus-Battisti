const { createServer } = require('http');
const serverHTPP = createServer((request, response) => {
  creatingServer(response);
});

function creatingServer(response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(
    '<head><meta charset="UTF-8"></head><body><h1>Olá mundo!</h1></body>'
  );
  response.end();
}

serverHTPP.listen(8000);

console.log('Ouvindo na porta 8000');
