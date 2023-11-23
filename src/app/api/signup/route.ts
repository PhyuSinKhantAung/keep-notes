import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const existingUser = await User.findOne({ email: reqBody.email });

    if (existingUser)
      return NextResponse.json(
        { message: "User already exists", code: 400 },
        { status: 400 }
      );

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(reqBody.password, salt);

    const user = await User.create({ ...reqBody, password: hashedPassword });

    const token = await jwt.sign(
      { id: user._id, email: user.email },
      "thisissecretforjwtjsonwebtokenpayload12345634934340340",
      { expiresIn: "30d" }
    );

    const response = NextResponse.json(
      {
        message: "User created successfully",
        code: 201,
      },
      { status: 201 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      { message: `${error.message}`, code: 500 },
      { status: 500 }
    );
  }
}
