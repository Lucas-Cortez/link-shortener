import { NextRequest, NextResponse } from "next/server";

import { validateCreateShortLink } from "@/utils/validators/createShortLink";
import { createShortenedUrl } from "@/services/createShortenedUrl";
import { getShortenedUrl } from "@/services/getShortenedUrl";
import { AppError } from "@/utils/errors/appError";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const data = validateCreateShortLink(body);

    const urlSlug = await createShortenedUrl(data.nickname, data.url);

    return NextResponse.json({ url: `${process.env.NEXT_PUBLIC_FRONT_DNS}/${urlSlug}` }, { status: 201 });
  } catch (error) {
    if (error instanceof AppError)
      return NextResponse.json({ message: error.message }, { status: error.statusCode });

    return NextResponse.json({ message: "Algum erro ocorreu na criação do Link" }, { status: 500 });
  }
}
