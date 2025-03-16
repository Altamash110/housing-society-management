import bcrypt from 'bcrypt';
import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    // ✅ Step 1: Find the user
    const user = await prisma.user.findUnique({
      where: { email },
    });

    console.log('Retrieved user:', user); // ✅ Debug output

    if (!user) {
      return NextResponse.json(
        { error: 'Invalid email or password (User not found)' },
        { status: 401 }
      );
    }

    // ✅ Step 2: Compare the hashed password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    console.log('isPasswordValid:', isPasswordValid); // ✅ Debug output

    if (!isPasswordValid) {
      return NextResponse.json(
        { error: 'Invalid email or password (Password mismatch)' },
        { status: 401 }
      );
    }

    // ✅ Step 3: Redirect based on role
    let redirectUrl = '/';
    switch (user.role) {
      case 'admin':
        redirectUrl = '/dashboard/admin';
        break;
      case 'resident':
        redirectUrl = '/dashboard/resident';
        break;
      case 'tenant':
        redirectUrl = '/dashboard/tenant';
        break;
      case 'security':
        redirectUrl = '/dashboard/security';
        break;
      case 'committee':
        redirectUrl = '/dashboard/committee';
        break;
      default:
        redirectUrl = '/';
    }

    return NextResponse.json(
      {
        message: 'User logged in successfully',
        user,
        redirectUrl,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Sign-in error:', error);
    return NextResponse.json(
      { error: 'Error signing in' },
      { status: 500 }
    );
  }
}
