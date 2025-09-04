const express = require("express");
const app = express();
const data = require("./data");

app.get("/users", (req, res) => {
    //res.send(data.users);
    res.json({
        message:"data successful ok",
        data:data.users,
        time:new Date().toLocaleString()
    })
    
});
app.post("/uers",(req,res)=>{
    const new_data=req.body
    data.users.push(new_data)
    res.json({
        message:"data successfully loaded",
        data:data.users
    })
})

app.listen(8000, () => {
    console.log("Server started on port 7000");
});
