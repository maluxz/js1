var fs = require("fs")
console.log("Abriendo archivo")

var content = fs.readFileSync("archivo.txt")
console.log(content)

console.log("\nHaciendo otra cosa")
console.log(process.uptime())