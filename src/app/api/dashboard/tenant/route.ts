import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const tenants = await prisma.user.findMany({ where: { role: "tenant" } });
    return NextResponse.json(tenants, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching tenant data" }, { status: 500 });
  }
}
