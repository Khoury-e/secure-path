const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
// to use .env files
require("dotenv").config()

// set CORS settings to allow access to backend only from frontend IP
const corsSettings = {
    origin: ['http://localhost:8080', 'http://localhost:8000', 'http://127.0.0.1/8080', 'http://127.0.0.1/8000'],
    default: 'http://localhost:8080',
    credentials: true,
    exposedHeaders: ['set-cookie']
}

app.use(cors(corsSettings));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


// define routes
const authRoutes = require("./routes/Auth/auth");

// use routes
app.use("/auth", authRoutes);


// invalid routes
app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

// connect database
const dbURL = `mongodb://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASS}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/${process.env.MONGO_DB}`
mongoose.connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Database connected"))
.catch(err => console.error("Database connection error:", err));

// start server
const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});