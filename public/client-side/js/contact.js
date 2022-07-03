const nodemailer = require("nodemailer");
const mailGun = require("nodemailer-mailgun-transport");

const auth = {
    auth: {
        api_key: "e876c52c2bbaa46240e1d509108720a1-77985560-6cae8855",
        domain: "sandbox5caac169510a4aa98f4c97eaeeff55de.mailgun.org",
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