const htmlContent = `<html>
  <head>
    <title>Email Template</title>
    <style>
      /* Add your CSS styles here */
    </style>
  </head>
  <body>
    <h1>Welcome!</h1>
    <p>This is a test email.</p>
    <p>Hello {{name}},</p>
    <p>Your email address is {{email}}.</p>
    <p>Best regards,</p>
    <p>Your Name</p>
  </body>
</html>
`;
var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "luonatech@gmail.com",
    pass: "ehme cics gdnc kpye",
  },
});

var mailOptions = {
  from: "luonatech@gmail.com",
  to: "luonatech@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
  html: htmlContent,
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
