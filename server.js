const express = require("express");
const port = 6509;
const dbConnect = require("./config/db");

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));

app.get('/', (req, res) => {
    res.send("Hello to the Restaurant Application")
});
dbConnect();

app.listen(port, () => {
    console.log(`Server started at localhost ${port}`);
})