'use server';

import { Resend } from 'resend';

type Data = {
  name: string;
  email: string;
  message: string;
};

export default async function sendEmail({ name, email, message }: Data) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    const result = await resend.emails.send({
      from: 'portfolio@mirfayz.uz',
      to: 'mrkarimoff99@gmail.com',
      subject: "Let's talk about opportunities!",
      html: `<div>
     <h1>You have a message from -> ${name}</h1>
     <p><strong>Sender:</strong> ${email}</p>
     <p><strong>Message:</strong> ${message}</p>
    </div>`,
    });

    if (!result.data) throw new Error(result.error?.message);

    return { error: null, data: 'Email sent successfully!' };
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return { error, data: null };
  }
}
