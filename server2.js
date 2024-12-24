var http= require('http')
var a=10
var b=20
var c=a+b
var msg
if(c==30){
    msg="sum is 30"

}
else{
    msg="sum is not 30"
}

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'})
    res.write("a value is "+a)
    res.write("<br>b value is "+b)
    res.write(`<br/><b>sum is ${a+b}</b>`)
    res.end("<br/>"+msg+"done")
    
}).listen(4001)
console.log("Server is Started on http://127.0.0.1:4001")


