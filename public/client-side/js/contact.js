const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");
require("dotenv").config({ path: ".env" });

const auth = {
    auth: {
        api_key: process.env.API_KEY,
        domain: process.env.DOMAIN,
    },
};

const transporter = nodemailer.createTransport(mailGun(auth));

const sendMail = (fromname, email, subject, message, cb) => {
    const mailOptions = {
        from: fromname + " <" + email + " >",
        to: "iete.vitvellore@gmail.com",
        subject,
        text: message,
    };

    transporter.sendMail(mailOptions, function(err) {
        if (err) {
            cb(err, null);
        } else {
            cb(null, { data: "Sent" });
        }
    });
};

module.exports = sendMail;