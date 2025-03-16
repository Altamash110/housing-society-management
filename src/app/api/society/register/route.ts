import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, address, contactInfo } = await req.json();

    // Validation
    if (!name || !address || !contactInfo) {
      return NextResponse.json(
        { error: "All fields are required" },
        { status: 400 }
      );
    }

    // Check if the society already exists
    const existingSociety = await prisma.society.findFirst({
      where: { name },
    });

    if (existingSociety) {
      return NextResponse.json(
        { error: "Society already exists" },
        { status: 400 }
      );
    }

    // Create new society
    const newSociety = await prisma.society.create({
      data: {
        name,
        address,
        contactInfo,
        registrationNumber: `REG-${Date.now()}`,
      },
    });

    return NextResponse.json(
      {
        message: "Society registered successfully",
        society: newSociety,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Society registration error:", error);
    return NextResponse.json(
      { error: "Failed to register society" },
      { status: 500 }
    );
  }
}
