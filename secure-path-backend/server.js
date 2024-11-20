const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config()

const corsSettings = {
    origin: ['http://localhost:8080', 'http://localhost:8000', 'http://127.0.0.1/8080', 'http://127.0.0.1/8000'],
    default: 'http://localhost:8080',
    credentials: true,
    exposedHeaders: ['set-cookie']
}

app.use(cors(corsSettings));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const authRoutes = require("./routes/Auth/auth");

// routes
app.use("/auth", authRoutes);

app.use((req, res, next) => {
    res.status(404).send('Route not found');
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});