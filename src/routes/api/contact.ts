import { json } from "@tanstack/react-start/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const ContactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  service: z.string().min(1, "Service is required"),
  message: z.string().min(1, "Message is required"),
});

type ContactForm = z.infer<typeof ContactFormSchema>;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER || "100soft.info@gmail.com",
    pass: process.env.GMAIL_PASSWORD,
  },
});

async function sendContactEmail(data: ContactForm) {
  const emailContent = `
    <h2>New Contact Request from ${data.name}</h2>
    <p><strong>From:</strong> ${data.name} (${data.email})</p>
    ${data.phone ? `<p><strong>Phone/WhatsApp:</strong> ${data.phone}</p>` : ""}
    <p><strong>Service:</strong> ${data.service}</p>
    <hr />
    <p><strong>Message:</strong></p>
    <p>${data.message.replace(/\n/g, "<br />")}</p>
  `;

  const mailOptions = {
    from: process.env.GMAIL_USER || "100soft.info@gmail.com",
    to: "100soft.info@gmail.com",
    replyTo: data.email,
    subject: `Contact Request: ${data.name} - ${data.service}`,
    html: emailContent,
  };

  return transporter.sendMail(mailOptions);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = ContactFormSchema.parse(body);

    await sendContactEmail(data);

    return json({ success: true, message: "Message sent successfully" });
  } catch (error) {
    console.error("Contact form error:", error);

    if (error instanceof z.ZodError) {
      return json({ success: false, errors: error.errors }, { status: 400 });
    }

    return json(
      { success: false, message: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
