'use server';

import dotenv from 'dotenv';
import Sib from 'sib-api-v3-sdk';

dotenv.config();

type Data = {
  name: string;
  email: string;
  message: string;
};

export default async function sendEmail({ name, email, message }: Data) {
  const client = Sib.ApiClient.instance;
  const apiKey = client.authentications['api-key'];
  apiKey.apiKey = process.env.SENDGRID_API_KEY;

  const tranEmailApi = new Sib.TransactionalEmailsApi();

  const sender = {
    email: 'mirfayzkarimoff@gmail.com',
    name,
  };

  const receivers = [
    {
      email: 'mrkarimoff99@gmail.com',
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

    return { error: null, message: 'Email sent successfully!' };
  } catch (error) {
    console.error(error);
    return { error, message: 'Failed to send email!' };
  }
}
