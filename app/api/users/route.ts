import { NextRequest, NextResponse } from "next/server";

import { db } from "@/lib/db/drizzle";
import { Users } from "@/lib/db/schema";
import logger from "@/lib/utils/logger";


export async function GET() {
  try {
    const AllUsers = await db.select().from(Users).orderBy(Users.first_name);
    return NextResponse.json(AllUsers);
  } catch (error) {
    logger.error("Error retrieving users", error);
    return NextResponse.json({ error });
  }
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  try {
    const newUser = await db.insert(Users).values(body).returning();
    return NextResponse.json(newUser);
  } catch (error) {
    logger.error("Error creating users", error);
    return NextResponse.json({ error });
  }
}
