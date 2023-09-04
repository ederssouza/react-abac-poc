const express = require("express");
const cors = require("cors");
const { router } = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());
app.use("/api", router);

app.listen(PORT, () => console.log("Server is running..."));
