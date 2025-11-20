import express from "express";
const app = express();
app.get("/", (req,res)=>res.send("Petstore Backend Running"));
app.listen(4000, ()=>console.log("Backend running"));
