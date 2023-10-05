// Llamamos al modulo http
const http = require('http');
const hostname = '192.168.1.149';
const port = 3000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader ('Constent-Type', 'text/plain');
    res.end('Hola mundo\n');
});

server.listen(port,hostname,() => {
    console.log('Servidor corriendo en http://${hostname}:${port}/');
});