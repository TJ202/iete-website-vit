require("dotenv").config({ path: ".env" });
const express = require("express");
const app = express();
const ejs = require("ejs");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const flash = require("connect-flash");

const PORT = process.env.PORT || 5000;
const DB_URL = process.env.DB_URI;
const oneDay = 1000 * 60 * 60 * 24;
const SECRET = process.env.SECRET;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", ejs);
app.use(flash());

app.use(
    session({
        secret: SECRET,
        saveUninitialized: true,
        cookie: { maxAge: oneDay },
        resave: false,
    })
);

app.use(cookieParser());

mongoose
    .connect(DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("✅ Database Connected!");
    })
    .catch((err) => {
        console.log("DB connect error:", err);
    });

const boardRoutes = require("./routes/boardRoutes");
const contactRoutes = require("./routes/contactRoutes");
const coordinatorRoutes = require("./routes/coordinatorRoutes");
const domainRoutes = require("./routes/domainRoutes");
const homeRoute = require("./routes/homeRoute");

app.use("/", homeRoute);
app.use("/board", boardRoutes);
app.use("/contact", contactRoutes);
app.use("/coordinator", coordinatorRoutes);
app.use("/domain", domainRoutes);
app.use("/public", express.static("public"));

app.listen(PORT, () =>
    console.log(`Server started on http://localhost:${PORT}`)
);