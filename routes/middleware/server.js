const express = require("express");
const connectDB = require("./db");

const app = express();
connectDB();

app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/employees", require("./routes/employees"));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
