import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET || "your_secret_key";

export function generateToken(user: { id: number; role: string }) {
  return jwt.sign({ userId: user.id, role: user.role }, SECRET_KEY, { expiresIn: "1h" });
}

export function verifyToken(token: string) {
  return jwt.verify(token, SECRET_KEY);
}
