import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verify } from "jsonwebtoken";

const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"; 

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }

  try {
    verify(token, SECRET_KEY);
    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/auth/signin", req.url));
  }
}

// Apply middleware to dashboard routes
export const config = {
  matcher: "/dashboard/:path*",
};
