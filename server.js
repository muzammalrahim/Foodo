const express = require("express");
const dbConnect = require("./config/db");
dbConnect();

// const adminRoute = require("./routes/admin");
// const outletRoute = require("./routes/outlet");
const userRoute = require("./routes/user");

const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));

// app.use("/api/v1/admin", adminRoute);
// app.use("/api/v1/outlet", outletRoute);
app.use("/api/v1/user", userRoute);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at localhost ${PORT}`);
})