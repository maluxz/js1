var fs = require("fs");
console.log("Abriendo archivo");
console.time('lectura');
var content = fs.readFile("archivo.txt","utf-8", function(error,content){
    console.log(content);
    console.timeEnd('lectura');
    console.log(process.uptime());
    console.log("\nTiempo para hacer otra cosa");
    console.log(oldTime);
});

// Guardo el tiempo cuando estuvo disponible para "Hacer otra cosa"
var oldTime = process.uptime();
// console.log("\nHaciendo otra cosa");