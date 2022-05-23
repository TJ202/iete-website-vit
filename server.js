const express = require("express");
const app = express();
const ejs = require("ejs");

const PORT = process.env.PORT || 5000;

app.use("/", require("./routes/client-side/routes.js"));
app.use("/public", express.static("public"));

// Set the view engine to ejs
app.set("view engine", ejs);

app.listen(PORT, () =>
    console.log(`Server started on http://localhost:${PORT}`)
);