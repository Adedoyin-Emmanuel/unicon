import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (request: Request) => {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        {
          data: {
            message: "No token provided",
            token: `Token is ${token!}`,
          },
        },

        { status: 400 }
      );
    }

    cookies().set("next_refresh_token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 604800000,
      path: "/",
    });

    return NextResponse.json({ message: "Cookie set successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: `Something went wrong ${error}` },
      { status: 500 }
    );
  }
};
