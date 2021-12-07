const express = require("express");
const port = 6509;
const dbConnect = require("./config/db");

const userRouter = require("./routes/user.routes");
const dealRouter = require("./routes/deals.routes");
const registerRouter = require("./routes/register.routes");
const loginRouter = require("./routes/login.routes");
const auth = require("./middleware/auth");
dbConnect();

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));

app.get('/', (req, res) => {
    res.send("Hello to the Restaurant Application")
});

app.use('/user', userRouter);
app.use('/deal', auth, dealRouter);
app.use('/register', registerRouter);
app.use("/login", loginRouter);

app.listen(port, () => {
    console.log(`Server started at localhost ${port}`);
})