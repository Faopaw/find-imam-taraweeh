import deleteVacancy from "@/utils/delete-vacancy";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  try {
    const body = await request.json();
    const { id, pinCode } = body;

    if (!id) {
      return NextResponse.json({ error: "ID is required" }, { status: 400 });
    }

    if (!pinCode) {
      return NextResponse.json({ error: "Pin code is required" }, { status: 400 });
    }

    await deleteVacancy(id);
    return NextResponse.json(
      { message: "Vacancy deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in remove-vacancy API route:", error);
    return NextResponse.json(
      {
        error:
          error instanceof Error
            ? error.message
            : "Failed to delete vacancy. Please try again later.",
      },
      { status: 500 }
    );
  }
}
