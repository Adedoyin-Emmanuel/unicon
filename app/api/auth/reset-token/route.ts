import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export const POST = async (request: Request) => {
  try {
    cookies().delete("next_refresh_token");

    return NextResponse.json({ message: "Cookie removed successfully" });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    );
  }
};
