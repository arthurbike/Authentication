require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");

const SERVER_PORT = process.env.SERVER_PORT;
const SMTP_PORT = process.env.SMTP_PORT;
const SMTP_HOST = process.env.SMTP_HOST;

const USERNAME = process.env.USERNAME;
const PASSWORD = process.env.PASSWORD;
console.log(USERNAME, PASSWORD);
const app = express();

app.get("/", async (req, res) => {
  res.send("hello");
});

app.get("/send", async (req, res) => {
  // const testAccount = await nodemailer.createTestAccount();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: true,
    auth: {
      user: USERNAME,
      pass: PASSWORD,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });

  try {
    const info = await transporter.sendMail({
      from: USERNAME,
      to: USERNAME,
      replyTo: "arthur.7martins@gmail.com",
      subject: "Hello World SMTP!",
      text: "Hello World!",
    });
    res.send(
      "-------------------------------" +
        info +
        "-------------------------------"
    );
    console.log(info);
  } catch (err) {
    console.log(err);
    res.send(err.message);
  }
});

app.all("*", () => {
  throw new Error("404 Not found").message;
});

app.listen(SERVER_PORT, () => {
  console.log(`Server listen on port ${SERVER_PORT}`);
});
