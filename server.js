var http= require('http')

http.createServer((req,res)=>{
    res.end("<h1> hello world </h1>")
}).listen(4000)
console.log("Server isStarted on http://127.0.0.1:4000")
