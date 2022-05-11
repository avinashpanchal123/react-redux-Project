const express  = require("express");

const app = express();

app.use(express.json());

const productController = require("./controllers/product.controller");


app.get("/", (req, res)=>{
    res.send("Hello server is working fine")
})

app.use("/products", productController)


module.exports = app;