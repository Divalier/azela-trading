import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { NextRequest } from "next/server";

// ✅ Define NextAuth configuration correctly
const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

// ✅ Explicitly define GET and POST handlers for Next.js API Routes
export function GET(req: NextRequest) {
  return handler(req);
}

export function POST(req: NextRequest) {
  return handler(req);
}
