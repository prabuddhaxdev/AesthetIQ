import { db } from "@/config/db";
import { Users } from "@/config/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { user } = await req.json();

  //If user already exist
  try {
    const userInfo = await db
      .select()
      .from(Users)
      .where(eq(Users.email, user?.primaryEmailAddresses.emailAddress));
    console.log("User", userInfo);
    //If not
    if (userInfo?.length === 0) {
      const SaveResult = await db
        .insert(Users)
        .values({
          name: user?.name,
          email: user?.primaryEmailAddresses.emailAddress,
          imageUrl: user?.imageUrl,
        })
        .returning({id:Users });

      return NextResponse.json({ result: SaveResult[0].Users });
    }
    return NextResponse.json({ result: userInfo[0] });
  } catch (e) {
    return NextResponse.json({ error: e });
  }
}
