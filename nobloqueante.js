var fs = require("fs");
console.log("Abriendo archivo");

var content = fs.readFile("archivo.txt","utf-8", function(error,content){
    console.log(content);
});

console.log("\nHaciendo otra cosa");
console.log(process.uptime());