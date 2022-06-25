//require("dotenv").config();

const PORT = process.env.PORT || 5000;

const app = require("express")();
const cors = require("cors");

app.use(cors());

app.get("/", (req, res) => {
    res.send("test");
});

app.get("/test", (req, res) => {
    const {name}= req.query;
    res.send(`Test ${name}`);
});

app.listen(PORT, () => {
    console.log(`listening at http://localhost:${PORT}`);
});