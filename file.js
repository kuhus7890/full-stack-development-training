const server=require("http")
server.createServer((req,res)=>{
    if(req.url==="/"){
        res.write("this is my home page")
    }
    else{
        if(req.url==='/about'){
            res.write("this is about page")
        }
        else{
            res.write("404 page not found")
        }
    }
    res.end("")

}).listen(4001,()=>{
    console.log("server running")
})