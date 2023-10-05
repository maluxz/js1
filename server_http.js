// Importamos el módulo http de Node.js
const http = require('http');

// Definimos la dirección IP y el puerto en el que escuchará el servidor
const hostname = 'localhost';
const port = 3000;

// Creamos el servidor HTTP y especificamos una función de devolución de llamada
const server = http.createServer((req, res) => {
    // Configuramos el código de estado de la respuesta como 200 (OK)
    res.statusCode = 200;

    // Configuramos la cabecera (header) de la respuesta para indicar que el contenido es texto plano
    res.setHeader('Content-Type', 'text/plain');

    // Enviamos la respuesta al cliente con el mensaje "Hola mundo" y un salto de línea
    res.end('Hola mundo\n');
});

// Hacemos que el servidor escuche en el puerto y la dirección IP especificados
server.listen(port, hostname, () => {
    // Cuando el servidor se inicia correctamente, mostramos un mensaje en la consola
    console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
