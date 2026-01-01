import { NextRequest, NextResponse } from "next/server";
import uploadDataNeon from "../../../utils/uploadDataNeon";
import { VacancyFormValues } from "../../../types";
import sanitizeHtml from "sanitize-html";

export async function POST(request: NextRequest) {
  try {
    const body: VacancyFormValues = await request.json();

    // Sanitize input data
    const sanitizedData = {
      contactName: sanitizeHtml(body.contactName),
      contactNumber: sanitizeHtml(body.contactNumber),
      masjid: sanitizeHtml(body.masjid),
      city: sanitizeHtml(body.city),
      address: sanitizeHtml(body.address),
      requirements: sanitizeHtml(body.requirements),
      details: sanitizeHtml(body.details),
      terms: sanitizeHtml(body.terms!.toString()), // Convert boolean to string
      pinCode: body.pinCode,
    };

    // Validate required fields
    if (
      !sanitizedData.contactName ||
      !sanitizedData.contactNumber ||
      !sanitizedData.masjid ||
      !sanitizedData.city ||
      !sanitizedData.address ||
      !sanitizedData.requirements ||
      !sanitizedData.details
    ) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const id = await uploadDataNeon(sanitizedData);

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
