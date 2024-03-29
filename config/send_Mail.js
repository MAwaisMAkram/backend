const nodemailer = require("nodemailer");

// send account verification email

const sendVerificationMail = async (email, otpCode) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: "no_reply@clickbazaar.com",
    to: email,
    subject: "Email Account Verification",
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: orange;text-decoration:none;font-weight:600">Click Bazaar</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Thank you for choosing Click Bazzar. Use the following OTP to verify your account.</p>
      <h2 style="background: #fff;margin: 0 auto;width: max-content;padding: 0 10px;color: gray;border-radius: 4px;">${otpCode}</h2>
      <p style="font-size:0.9em;">Regards,<br />Click Bazaar</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Munasib Deals</p>
        <p></p>
      </div>
    </div>
  </div>`,
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
    }
    console.log("Email for account verification sent successfully");
  });
};

const sendResetPasswordMail = async (email, otpCode) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: process.env.EMAIL_ADDRESS,
      pass: process.env.EMAIL_PASSWORD,
    },
  });
  const mailOptions = {
    from: "no_reply@clickbazaar.com",
    to: email,
    subject: "Reset Your password",
    html: `<div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: orange;text-decoration:none;font-weight:600">Click Bazaar</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Kindly use below the otp code to reset your password</p>
      <h2 style="background: #fff;margin: 0 auto;width: max-content;padding: 0 10px;color: gray;border-radius: 4px;">${otpCode}</h2>
      <p style="font-size:0.9em;">Regards,<br />Click Bazaar</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <p style="font-size:0.7em; color: red"><span style="font-weight: bold;">NOTE:</span> if you didn't request to reset your password than feel free to ignore this email</p>
      <hr style="border:none;border-top:1px solid #eee" />
      <div style="float:right;padding:8px 0;color:#aaa;font-size:0.8em;line-height:1;font-weight:300">
        <p>Munasib Deals</p>
        <p></p>
      </div>
    </div>
  </div>`,
  };
  await transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error.message);
    }
    console.log("Email for reset password sent successfully");
  });
};
module.exports = { sendVerificationMail, sendResetPasswordMail };
