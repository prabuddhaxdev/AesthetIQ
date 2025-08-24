import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { eq } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { user } = await req.json();

  try {
    const email = user?.primaryEmailAddress?.emailAddress;

    if (!email) {
      return NextResponse.json({
        error: "No email found in Clerk user object",
      });
    }

    // Check if user already exists
    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, email));

    console.log("User found:", userInfo);

    //if not
    if (userInfo.length === 0) {
      const SaveResult = await db
        .insert(Users)
        .values({
          name: user?.fullName,
          email: email,
          imageUrl: user?.imageUrl,
        })
        .returning({ id: Users.id, email: Users.email });
      return NextResponse.json({ result: SaveResult[0] });
    }
  return NextResponse.json({ result: userInfo[0] });
  } catch (e) {
    return NextResponse.json({ error: e});
  }
}
