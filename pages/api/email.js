import Sib from "sib-api-v3-sdk";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  const { name, email, content } = req.body;
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
    Message: ${content}
    `,
    });
    res.status(200).json({ message: "Email sent successfully" });
  } catch (error) {
    console.error(error);
  }
}
