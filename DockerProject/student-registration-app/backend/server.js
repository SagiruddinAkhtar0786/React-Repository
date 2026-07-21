const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");


const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Express Server is Running");
});

// MongoDB login details
const MONGO_USER = "admin";
const MONGO_PASSWORD = "admin";
const MONGO_HOST = "localhost"; // use "mongo" when running inside Docker compose network
const MONGO_PORT = "27017";
const MONGO_DB = "admin"; // auth database for root user
const MONGO_URL = `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@${MONGO_HOST}:${MONGO_PORT}/?authSource=${MONGO_DB}`;

// Create Mongo Client
const client = new MongoClient(MONGO_URL);

// Connect to MongoDB only once
async function connectDB() {
    try {
        await client.connect();
        console.log("✅ Connected successfully to MongoDB");
    } catch (err) {
        console.log("❌ MongoDB Connection Failed");
        console.log(err);
    }
}

connectDB();

// =========================
// GET ALL USERS
// =========================

app.get("/getUsers", async (req, res) => {

    try {

        const db = client.db("apnacollege-db");

        const users = await db
            .collection("users")
            .find({})
            .toArray();

        res.status(200).json(users);

    } catch (err) {

    console.error("GET /getUsers Error:");
    console.error(err);

    res.status(500).json({
        message: "Error fetching users",
        error: err.message
    });

}

});

// =========================
// ADD USER
// =========================

app.post("/addUser", async (req, res) => {

    try {

        const userObj = req.body;

        const db = client.db("apnacollege-db");

        const result = await db
            .collection("users")
            .insertOne(userObj);

        res.status(201).json({
            success: true,
            message: "Account Created Successfully",
            insertedId: result.insertedId
        });

    } catch (err) {

        console.log(err);

        res.status(500).json({
            success: false,
            message: "Unable to create account"
        });

    }

});

// =========================
// START SERVER
// =========================

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});