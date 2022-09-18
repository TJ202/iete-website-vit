const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
    },
    eventDescription: {
        type: String,
    },
    eventLink: {
        type: String,
    },
    eventDate: {
        type: String,
    },
    eventImage: {
        data: Buffer,
        contentType: String,
    }
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;