import { NextResponse } from "next/server";

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/**
 * Enquiry endpoint.
 *
 * Validates the submission server-side. It does NOT yet deliver the enquiry
 * anywhere — connect an email service (e.g. Resend, Postmark) or CRM at the
 * marked point before launch.
 */
export async function POST(request: Request) {
  let data: Record<string, unknown>;
  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const text = (key: string) => (typeof data[key] === "string" ? (data[key] as string).trim() : "");

  // Honeypot: real visitors never fill this field.
  if (text("website")) return NextResponse.json({ ok: true });

  const errors: Record<string, string> = {};
  if (text("name").length < 2) errors.name = "Please enter your name.";
  if (!EMAIL.test(text("email"))) errors.email = "Please enter a valid email address.";
  if (text("message").length < 10) errors.message = "Please tell us a little about the project.";

  if (Object.keys(errors).length) {
    return NextResponse.json({ ok: false, errors }, { status: 422 });
  }

  // TODO: deliver the enquiry (email / CRM) here.

  return NextResponse.json({ ok: true });
}
