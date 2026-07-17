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

// MongoDB Connection URL
//const MONGO_URL = "mongodb://localhost:27017";
 const MONGO_URL = "mongodb://admin:admin@localhost:27017";

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