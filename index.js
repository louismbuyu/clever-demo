const express = require("express");
const app = express();

app.get("/", (req, res) => {
    return res.send({message: "Hello World this is it!!! 2222 insane fast jhjkhhj"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server listening on: ",PORT);
});
