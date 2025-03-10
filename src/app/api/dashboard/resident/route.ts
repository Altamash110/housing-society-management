import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
  try {
    const bills = await prisma.maintenanceBill.findMany();
    return NextResponse.json(bills, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Error fetching maintenance bills" }, { status: 500 });
  }
}
