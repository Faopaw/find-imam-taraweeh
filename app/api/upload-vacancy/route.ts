import { NextRequest, NextResponse } from "next/server";
import uploadDataNeon from "../../../utils/uploadDataNeon";
import { VacancyFormValues } from "../../../types";

export async function POST(request: NextRequest) {
  try {
    const body: VacancyFormValues = await request.json();

    // Validate required fields
    if (
      !body.contactName ||
      !body.contactNumber ||
      !body.masjid ||
      !body.city ||
      !body.address ||
      !body.requirements ||
      !body.details
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const id = await uploadDataNeon(body);

    return NextResponse.json(
      { message: "Vacancy submitted successfully", id: id },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in upload-vacancy API route:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to submit vacancy. Please try again later.",
      },
      { status: 500 }
    );
  }
}
