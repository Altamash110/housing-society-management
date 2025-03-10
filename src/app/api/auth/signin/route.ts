import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { sign } from "jsonwebtoken";

const prisma = new PrismaClient();
const SECRET_KEY = process.env.SECRET_KEY || "your_secret_key"; 

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // Check if user exists
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Verify password
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return NextResponse.json({ error: "Invalid email or password" }, { status: 401 });
    }

    // Generate JWT Token
    const token = sign({ userId: user.id, role: user.role }, SECRET_KEY, { expiresIn: "1h" });

    // Role-based Dashboard Route
    const dashboardRoutes: Record<string, string> = {
      admin: "/dashboard/admin",
      resident: "/dashboard/resident",
      tenant: "/dashboard/tenant",
      security: "/dashboard/security",
    };
    const dashboardRoute = dashboardRoutes[user.role] || "/dashboard";

    console.log("Returning redirect:", dashboardRoute); // ✅ Debugging log

    // Set Cookie for Authentication
    const response = NextResponse.json(
      { message: "Login successful", redirect: dashboardRoute },
      { status: 200 }
    );
    response.cookies.set("token", token, { httpOnly: true });

    return response;
  } catch (error) {
    return NextResponse.json({ error: "Error logging in" }, { status: 500 });
  }
}
