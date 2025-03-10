import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const visitors = await prisma.visitor.findMany();
    return NextResponse.json(visitors, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching security data" }, { status: 500 });
  }
}
