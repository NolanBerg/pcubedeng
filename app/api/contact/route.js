import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const { name, email, message } = await request.json();

  const { error } = await resend.emails.send({
    from: 'P Cubed Contact <onboarding@resend.dev>',
    to: 'nolanb912@gmail.com',
    subject: `New message from ${name}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
  });

  if (error) {
    return Response.json({ success: false }, { status: 500 });
  }

  return Response.json({ success: true });
}
