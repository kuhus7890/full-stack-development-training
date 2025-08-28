let obj=[
    {"id":1,"name":"alice"},
    {"id":2,"name":"bob"},
    {"id":3,"name":"charlie"}
]
const server=require("http")
server.createServer((req,res)=>{
    res.write(JSON.stringify(obj))
    res.end("")
}).listen(4004,()=>{
    console.log("server running")
})