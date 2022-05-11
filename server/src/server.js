const app = require("./index");
const connect = require("./configs/db")

const port = process.env.PORT || 2233;

app.listen(port, async()=>{
    await connect()
    console.log(`listening on port ${port}`);
})