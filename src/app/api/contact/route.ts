import { NextResponse } from "next/server";
import { profile } from "@/content/profile";

const attempts = new Map<string, { count: number; expires: number }>();

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin)
    return NextResponse.json(
      { message: "Origem não permitida." },
      { status: 403 },
    );
  if (Number(request.headers.get("content-length") || 0) > 16000)
    return NextResponse.json(
      { message: "Mensagem muito longa." },
      { status: 413 },
    );
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0] || "local";
  const now = Date.now();
  for (const [key, value] of attempts)
    if (value.expires < now) attempts.delete(key);
  const attempt = attempts.get(ip) || { count: 0, expires: now + 600000 };
  if (attempt.count >= 5)
    return NextResponse.json(
      { message: "Aguarde alguns minutos antes de tentar novamente." },
      { status: 429 },
    );
  attempt.count++;
  attempts.set(ip, attempt);
  let data: Record<string, unknown>;
  try {
    const body = await request.text();
    if (body.length > 16000) throw new Error("size");
    const parsed: unknown = JSON.parse(body);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed))
      throw new Error("body");
    data = parsed as Record<string, unknown>;
  } catch {
    return NextResponse.json(
      { message: "Revise os campos da mensagem." },
      { status: 400 },
    );
  }
  const { name, email, message, subject, website } = data;
  if (website)
    return NextResponse.json(
      { message: "Mensagem não aceita." },
      { status: 400 },
    );
  if (
    typeof name !== "string" ||
    !name.trim() ||
    name.length > 100 ||
    typeof email !== "string" ||
    email.length > 254 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
    typeof message !== "string" ||
    message.trim().length < 15 ||
    message.length > 5000 ||
    typeof subject !== "string" ||
    ![
      "Uma oportunidade",
      "Um projeto",
      "Uma troca sobre desenvolvimento",
    ].includes(subject)
  )
    return NextResponse.json(
      {
        message:
          "Preencha nome, e-mail válido e uma mensagem de 15 a 5.000 caracteres.",
      },
      { status: 400 },
    );
  if (!process.env.RESEND_API_KEY || !process.env.CONTACT_FROM_EMAIL)
    return NextResponse.json(
      {
        message: `O envio está temporariamente indisponível. Escreva para ${profile.email}.`,
      },
      { status: 503 },
    );
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [profile.email],
        reply_to: email,
        subject: `Portfólio: ${subject}`,
        text: `Nome: ${name.trim()}\nE-mail: ${email}\n\n${message.trim()}`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("provider");
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      {
        message:
          "Não foi possível enviar agora. Tente novamente em alguns instantes.",
      },
      { status: 502 },
    );
  }
}
