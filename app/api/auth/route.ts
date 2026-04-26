import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    if (password === process.env.ADMIN_SECRET) {
      return NextResponse.json({ result: "success" });
    } else {
      return NextResponse.json({ error: "Wrong password" }, { status: 401 });
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
}
