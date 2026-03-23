const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

app.get("/api/health", (req, res) => {
	res.status(200).json({ status: "ok" });
});

// Routes
const userRoutes = require("./routes/userRoutes");

app.use("/api/users", userRoutes);

app.use((req, res) => {
	res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
	console.error(err);
	res.status(500).json({ message: "Internal server error" });
});

module.exports = app;
