const functions = require("firebase-functions");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "pavankalyanchowdary9154@gmail.com",
    pass: "YOUR_APP_PASSWORD", // Create this in Google Account > Security > App Passwords
  },
});

exports.sendEmail = functions.firestore
  .document("leads_hyderabad/{id}")
  .onCreate(async (snap) => {
    const data = snap.data();

    const mailOptions = {
      from: "pavankalyanchowdary9154@gmail.com",
      to: "pavankalyanchowdary9154@gmail.com",
      subject: "New Home Interior Lead (Hyderabad)",
      text: `New Lead Received!\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nCity: ${data.city}\nProject Type: ${data.projectType}\n\nTimestamp: ${data.timestamp}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: #D94C50; color: white; padding: 20px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="margin: 0;">New Lead Received!</h1>
          </div>
          <div style="background-color: white; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2 style="color: #333; margin-top: 0;">Lead Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>City:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.city}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Project Type:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.projectType}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0;"><strong>Submitted:</strong></td>
                <td style="padding: 10px 0;">${new Date(data.timestamp).toLocaleString()}</td>
              </tr>
            </table>
            <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #D94C50; border-radius: 5px;">
              <p style="margin: 0; color: #666;">Please follow up with this lead as soon as possible!</p>
            </div>
          </div>
        </div>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log("Email sent successfully for lead:", data.name);
      return null;
    } catch (error) {
      console.error("Error sending email:", error);
      return null;
    }
  });
