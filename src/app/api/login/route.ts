import { connect } from "@/lib/mongodb";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    console.log("call me");
    console.log(reqBody);

    const { email, password } = reqBody;

    const user = await User.findOne({ email });

    console.log("user", user);

    if (!user)
      return NextResponse.json(
        { code: 400, message: "User does not exist" },
        { status: 400 }
      );

    const isValidPassword = await bcryptjs.compare(password, user.password);
    if (!isValidPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const token = await jwt.sign(
      { id: user._id, email: user.email },
      "thisissecretforjwtjsonwebtokenpayload12345634934340340",
      { expiresIn: "30d" }
    );

    const response = NextResponse.json(
      {
        message: "Loggined successfully",
        code: 200,
      },
      { status: 200 }
    );

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        message: `${error.message}`,
        code: 500,
      },
      { status: 500 }
    );
  }
}
