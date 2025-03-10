import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const users = await prisma.user.findMany({ where: { role: "resident" } });
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching admin data" }, { status: 500 });
  }
}
