//console.log("this is my first program")
//nodejs module
//first--core module---built in eg--fs(for file operation),os(for os operation),http(to create server)

// const fs=require("fs")
// fs.writeFileSync("abc.txt","this is my first file")

// const data=fs.readFileSync("abc.txt","utf-8")//utf otherwise it cpme in binary file so to convert 
// console.log(data)

const data=require("os")
console.log(data.platform())

//second module is local module means made by own in local.ja file

//third modulre is third party module ---which we need to install by npm so we run "npm install chalk@4" on terminal to install
//now i see 2 json packageon left and i can use chalk method

const dataa=require("chalk")
console.log(dataa.green("this is my first program"))