const express = require("express");
const port = 6509;
const dbConnect = require("./config/db");

const userRouter = require("./routes/user.routes");
const dealRouter = require("./routes/deals.routes");
const registerRouter = require("./routes/register.routes");
const loginRouter = require("./routes/login.routes");
const restaurantRegisterRouter = require("./routes/restaurantRegister");
const restaurantLoginRouter = require("./routes/restaurantLogin");
const restaurantRouter = require("./routes/restaurants.routes");

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
app.use('/deal', dealRouter);
app.use('/register', registerRouter);
app.use("/login", loginRouter);
app.use("/restaurantRegister", restaurantRegisterRouter);
app.use("/restaurantLogin", restaurantLoginRouter);
app.use("/restaurant", restaurantRouter);

app.listen(port, () => {
    console.log(`Server started at localhost ${port}`);
})