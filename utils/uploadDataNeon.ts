import { Pool } from "@neondatabase/serverless";
import { VacancyFormValues } from "../types";

// Create a connection pool using the Neon DATABASE_URL
const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

export default async function uploadDataNeon(values: VacancyFormValues): Promise<string> {
  try {
    // Insert the form data into the Neon database
    const query = `
      INSERT INTO vacancies (
        contact_name,
        contact_number,
        masjid,
        city,
        address,
        requirements,
        details,
        pin_code
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
      RETURNING id;
    `;

    const params = [
      values.contactName,
      values.contactNumber,
      values.masjid,
      values.city,
      values.address,
      values.requirements,
      values.details,
      values.pinCode,
    ];

    const result = await pool.query<{ id: string }>(query, params);

    // Return the ID of the inserted row
    return result.rows[0].id;
  } catch (error) {
    console.error("Error inserting data into Neon DB:", error);
    throw new Error("Failed to insert data into Neon database.");
  }
}

