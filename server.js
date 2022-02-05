const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use("/", require("./routes/client-side/routes.js"));

app.listen(PORT, () =>
    console.log(`Server started on http://localhost:${PORT}`)
);