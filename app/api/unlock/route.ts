import { NextResponse } from "next/server";
import { createAccessToken } from "../../../lib/access-token";

export async function POST(request: Request) {
  const expectedPassword = process.env.SITE_GATE_PASSWORD;
  if (!expectedPassword) {
    return NextResponse.json({ error: "Password gate is not configured." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }

  let submittedPassword: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 1024) {
      return NextResponse.json({ error: "Invalid request." }, { status: 413, headers: { "Cache-Control": "no-store" } });
    }
    const body = JSON.parse(rawBody) as { password?: unknown };
    submittedPassword = body.password;
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400, headers: { "Cache-Control": "no-store" } });
  }

  if (typeof submittedPassword !== "string" || submittedPassword !== expectedPassword) {
    return NextResponse.json({ error: "Incorrect password." }, { status: 401, headers: { "Cache-Control": "no-store" } });
  }

  try {
    const token = await createAccessToken();
    const response = NextResponse.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
    response.cookies.set("charmaine_access", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 30,
    });
    return response;
  } catch {
    return NextResponse.json({ error: "Password gate is not configured." }, { status: 503, headers: { "Cache-Control": "no-store" } });
  }
}
