const express  = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res)=>{
    res.send("Hello server is working fine")
})


module.exports = app;