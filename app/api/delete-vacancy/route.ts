import { NextRequest, NextResponse } from "next/server";
import deleteVacancyNeon from "../../../utils/delete-vacancy-neon";

export async function POST(request: NextRequest) {
  try {
    const { contactName, contactNumber, pinCode } = await request.json();

    // Validate required fields
    if (!contactName || !contactNumber || !pinCode) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Call the utility function to delete the vacancy
    await deleteVacancyNeon(contactName, contactNumber, pinCode);

    return NextResponse.json(
      { message: "Vacancy deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in delete-vacancy API route:", error);
    return NextResponse.json(
      { error: "Failed to delete vacancy. Please try again later." },
      { status: 500 }
    );
  }
}