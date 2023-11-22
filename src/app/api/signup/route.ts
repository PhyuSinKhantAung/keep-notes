import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
const bcryptjs = require("bcryptjs");

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const user = await User.findOne({ email: reqBody.email });

    if (user)
      return NextResponse.json(
        { message: "User already exists", code: 400 },
        { status: 400 }
      );

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(reqBody.password, salt);

    await User.create({ ...reqBody, password: hashedPassword });

    return NextResponse.json(
      {
        message: "User created successfully",
        code: 201,
      },
      { status: 201 }
    );
  } catch (error: any) {
    return NextResponse.json(
      { message: `${error.message}`, code: 500 },
      { status: 500 }
    );
  }
}
