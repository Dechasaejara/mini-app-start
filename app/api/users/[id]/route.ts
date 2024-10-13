import { NextRequest, NextResponse } from "next/server";

import { HttpStatusCode } from "axios";
import { eq } from "drizzle-orm";

import { db } from "@/lib/db/drizzle";
import { Users } from "@/lib/db/schema";

export async function GET(
  _: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const user = await db
      .select()
      .from(Users)
      .where(eq(Users.id, params.id));
    return NextResponse.json(user, { status: HttpStatusCode.Ok });
  } catch (error) {
    return NextResponse.json(error, { status: HttpStatusCode.BadRequest });
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const body = await req.json();
    const UpdateUser = await db
      .update(Users)
      .set(body)
      .where(eq(Users.id, params.id))
      .returning();
    return NextResponse.json(UpdateUser, { status: HttpStatusCode.Created });
  } catch (error) {
    return NextResponse.json(error, { status: HttpStatusCode.BadRequest });
  }
}

export async function DELETE(
  _: NextRequest,
  { params }: { params: { id: number } }
) {
  try {
    const result = await db
      .delete(Users)
      .where(eq(Users.id, params.id))
      .returning({ deletedId: Users.id });
    return NextResponse.json(result, { status: HttpStatusCode.NotFound });
  } catch (error) {
    return NextResponse.json(error, { status: HttpStatusCode.BadRequest });
  }
}
