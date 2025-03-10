import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { name, email, phone, password, role, societyName, societyAddress, societyContact, societyId } = await req.json();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json({ error: "User already exists" }, { status: 400 });
    }

    // Hash password
    // const hashedPassword = await bcrypt.hash(password, 10);
    const hashedPassword = password

    let assignedSocietyId = parseInt(societyId);

    // If user is admin, create a new society first
    if (role === "admin") {
      const newSociety = await prisma.society.create({
        data: {
          name: societyName,
          address: societyAddress,
          contactInfo: societyContact,
          registrationNumber: `REG-${Date.now()}`, // Unique registration number
        },
      });
      assignedSocietyId = newSociety.id; // Assign new society ID
    }

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        role,
        password: hashedPassword,
        societyId: assignedSocietyId,
      },
    });

    return NextResponse.json({ message: "User registered successfully", user: newUser }, { status: 201 });

  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json({ error: "Error creating user" }, { status: 500 });
  }
}
