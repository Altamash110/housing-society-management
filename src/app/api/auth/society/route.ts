import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, address, contactInfo, registrationNumber } = await req.json();

    // Check if society already exists
    const existingSociety = await prisma.society.findUnique({
      where: { registrationNumber },
    });
    if (existingSociety) {
      return NextResponse.json({ error: "Society already exists" }, { status: 400 });
    }

    // Create new society
    const newSociety = await prisma.society.create({
      data: {
        name,
        address,
        contactInfo,
        registrationNumber,
      },
    });

    return NextResponse.json({ message: "Society registered successfully", society: newSociety }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Error registering society" }, { status: 500 });
  }
}
