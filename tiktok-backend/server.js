import express from "express";
import mongoose from "mongoose";
import Cors from 'cors';
import Videos from "./dbModel.js";

// app config
const app = express();
const port = process.env.PORT || 9000;
const dbConnectionUrl = 'mongodb+srv://admin:l4OB7HJKNKjnvsLY@cluster0.5z2kg.mongodb.net/tiktok_db?retryWrites=true&w=majority'

// middlewares
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(dbConnectionUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, () => {
    console.log("Connected to MongoDB");
})

// API endpoints
app.get("/", (req, res) => {
    res.status(200).send('Hello world');
})

app.get("/api/videos", (req, res) => {
    Videos.find((err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    });
});

app.post("/api/videos", (req, res) => {
    const payload = req.body;
    Videos.create(payload, (err, data) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).send(data);
        }
    })
});

// listen
app.listen(port, () => {
    console.log(`Backend started on port ${port}`);
})