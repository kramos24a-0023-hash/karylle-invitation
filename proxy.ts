import { NextRequest, NextResponse } from "next/server";
import { hasValidAccessToken } from "./lib/access-token";

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/api/unlock") return NextResponse.next();

  const token = request.cookies.get("charmaine_access")?.value;
  if (await hasValidAccessToken(token)) return NextResponse.next();

  if (request.nextUrl.pathname !== "/") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|favicon.ico).*)"],
};
