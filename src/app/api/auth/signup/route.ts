import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';
import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      password,
      role,
      societyName,
      societyAddress,
      societyContact,
      societyId,
    } = await req.json();

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    let assignedSocietyId: number | null = null;

    // If user is an admin, create a new society first
    if (role === 'admin' && societyName && societyAddress && societyContact) {
      const existingSociety = await prisma.society.findFirst({
        where: { name: societyName },
      });

      if (existingSociety) {
        return NextResponse.json(
          { error: 'Society already exists' },
          { status: 400 }
        );
      }

      const newSociety = await prisma.society.create({
        data: {
          name: societyName,
          address: societyAddress,
          contactInfo: societyContact,
          registrationNumber: `REG-${Date.now()}`,
        },
      });

      assignedSocietyId = newSociety.id;
    } else if (societyId) {
      assignedSocietyId = Number(societyId) || null;
    }

    // ✅ Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // ✅ Create user with hashed password
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        phone: phone || null,
        role,
        password: hashedPassword,
        society: assignedSocietyId
          ? { connect: { id: assignedSocietyId } }
          : null, // ✅ Use null instead of undefined
      },
    });
    import bcrypt from 'bcrypt';
    import { NextResponse } from 'next/server';
    import { PrismaClient, Prisma } from '@prisma/client';
    
    const prisma = new PrismaClient();
    
    export async function POST(req: Request) {
      try {
        const {
          name,
          email,
          phone,
          password,
          role,
          societyName,
          societyAddress,
          societyContact,
          societyId,
        } = await req.json();
    
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
          where: { email },
        });
    
        if (existingUser) {
          return NextResponse.json(
            { error: 'User already exists' },
            { status: 400 }
          );
        }
    
        let assignedSocietyId: number | undefined;
    
        // If user is an admin, create a new society first
        if (role === 'admin' && societyName && societyAddress && societyContact) {
          const existingSociety = await prisma.society.findFirst({
            where: { name: societyName },
          });
    
          if (existingSociety) {
            return NextResponse.json(
              { error: 'Society already exists' },
              { status: 400 }
            );
          }
    
          const newSociety = await prisma.society.create({
            data: {
              name: societyName,
              address: societyAddress,
              contactInfo: societyContact,
              registrationNumber: `REG-${Date.now()}`,
            },
          });
    
          assignedSocietyId = newSociety.id;
        } else if (societyId) {
          assignedSocietyId = Number(societyId) || undefined;
        }
    
        // ✅ Hash the password before saving to the database
        const hashedPassword = await bcrypt.hash(password, 10);
    
        // ✅ Create user with hashed password
        const newUser = await prisma.user.create({
          data: {
            name,
            email,
            phone: phone || undefined,
            role,
            password: hashedPassword,
            // ✅ Use undefined instead of null when no societyId is available
            society: assignedSocietyId !== undefined
              ? { connect: { id: assignedSocietyId } }
              : undefined,
          },
        });
    
        return NextResponse.json(
          { message: 'User registered successfully', user: newUser },
          { status: 201 }
        );
      } catch (error: any) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
          console.error('Prisma error:', error.message);
        } else {
          console.error('Signup error:', error);
        }
    
        return NextResponse.json
    
    return NextResponse.json(
      { message: 'User registered successfully', user: newUser },
      { status: 201 }
    );
  } catch (error: any) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      console.error('Prisma error:', error.message);
    } else {
      console.error('Signup error:', error);
    }

    return NextResponse.json(
      { error: 'Error creating user' },
      { status: 500 }
    );
  }
}
