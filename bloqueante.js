var fs = require("fs");
console.log("Abriendo archivo");

console.time('lectura');

var content = fs.readFileSync("archivo.txt","utf-8");
console.log(content);

console.timeEnd('lectura');

console.log("\nTiempo para hacer otra cosa");
console.log(process.uptime());