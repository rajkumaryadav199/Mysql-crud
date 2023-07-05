
const express=require("express")

const app=express()
const connect=require("./database")
app.get("/", (req, res)=>{

    res.send("connect get req done")
})

app.listen(3000, ()=>{
    console.log("listion port 3000")
    connect.connect((err)=>{
        if(err)
        {
            throw err
        }
        else{
            console.log("database connected")
        }
    })
})