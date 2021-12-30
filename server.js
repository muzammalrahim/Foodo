const path = require('path');
const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const errorHandler = require('./middleware/error');
const connectDB = require("./config/db");


// Load env vars
dotenv.config({ path: '.env' });

// Connect to database
connectDB();

// Route files
const authRoutes = require('./routes/auth');
const outletRoutes = require("./routes/outlet");
const adminRoutes = require('./routes/admin');
const subAdminRoutes = require('./routes/subAdmin');
// const adminRoutes = require("./routes/admin");
// const outletRoutes = require("./routes/outlet");
// const userRoutes = require("./routes/user");

const app = express();

// Enable CORS
app.use(cors());

// Body parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json({}));

// Mount routers
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/outlet", outletRoutes);
app.use("/api/v1/admin", adminRoutes);
app.use("/api/v1/subadmin", subAdminRoutes);
// app.use("/api/v1/admin", adminRoutes);
app.use(errorHandler);

// create & run server
const PORT = process.env.PORT || 3000;
const server = app.listen(
  PORT,
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);