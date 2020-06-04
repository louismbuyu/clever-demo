const express = require("express");
const app = express();

const requireHTTPS = (req, res, next) => {
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
};

app.use(requireHTTPS);

app.get("/", (req, res) => {
    return res.send({message: "Hello World this is it!!! 2222 insane fast jhjkhhj"});
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("server listening on: ",PORT);
});
