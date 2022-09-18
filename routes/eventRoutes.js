const express = require("express");
const router = express.Router();
const multer = require("multer");

const eventController = require("../controllers/eventController");

var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads");
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "-" + Date.now());
    },
});

const upload = multer({ storage: storage });

router.get("/view-event", eventController.events);
router.post(
    "/update-event",
    upload.single("eventImageAdd"),
    eventController.updateEvent
);
router.post(
    "/add-event",
    upload.single("eventImageAdd"),
    eventController.addEvent
);
router.post("/delete-event", eventController.deleteEvent);

module.exports = router;