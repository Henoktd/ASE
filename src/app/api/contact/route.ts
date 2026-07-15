import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactEmail } from "@/lib/site";

export const runtime = "nodejs";

const requiredEnvVars = [
  "SMTP_HOST",
  "SMTP_PORT",
  "SMTP_USER",
  "SMTP_PASS",
  "SMTP_FROM",
] as const;

function getMissingEnvVars() {
  return requiredEnvVars.filter((key) => !process.env[key]);
}

function getTransporter() {
  return nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, organization, message } = body ?? {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { ok: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  const missingEnvVars = getMissingEnvVars();

  if (missingEnvVars.length > 0) {
    console.error("Missing SMTP environment variables", missingEnvVars);

    return NextResponse.json(
      { ok: false, error: "Email service is not configured yet." },
      { status: 503 },
    );
  }

  const safeName = escapeHtml(String(name));
  const safeEmail = escapeHtml(String(email));
  const safeOrganization = escapeHtml(String(organization || "Not provided"));
  const safeMessage = escapeHtml(String(message)).replace(/\n/g, "<br />");

  try {
    const transporter = getTransporter();

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: contactEmail,
      replyTo: email,
      subject: `ASE website enquiry from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Organization: ${organization || "Not provided"}`,
        "",
        "Message:",
        message,
      ].join("\n"),
      html: `
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Organization:</strong> ${safeOrganization}</p>
        <p><strong>Message:</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send ASE contact email", error);

    return NextResponse.json(
      { ok: false, error: "Unable to send your message right now." },
      { status: 500 },
    );
  }
}
