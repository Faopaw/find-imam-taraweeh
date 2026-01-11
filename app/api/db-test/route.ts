import { NextResponse } from "next/server";
import { query } from "@/lib/db";

export async function GET() {
  const { rows } = await query("SELECT 1 as ok");
  return NextResponse.json(rows);
}