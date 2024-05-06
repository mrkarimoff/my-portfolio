import dotenv from "dotenv";
import Sib from "sib-api-v3-sdk";

dotenv.config();

export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "https://www.mirfayz.uz");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type");

  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only POST requests allowed" });
  }

  const { name, email, message } = req.body;
  const client = Sib.ApiClient.instance;
  const apiKey = client.authentications["api-key"];
  apiKey.apiKey = process.env.SENDGRID_API_KEY;

  const tranEmailApi = new Sib.TransactionalEmailsApi();

  const sender = {
    email: "mirfayzkarimoff@gmail.com",
    name,
  };

  const receivers = [
    {
      email: "mrkarimoff99@gmail.com",
    },
  ];

  try {
    await tranEmailApi.sendTransacEmail({
      sender,
      to: receivers,
      subject: "Let's talk about opportunities!",
      textContent: `
    You have a message from ${name}
    Sender: ${email}
    Message: ${message}
    `,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
  }
}
