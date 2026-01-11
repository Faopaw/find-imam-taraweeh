/* eslint-disable prettier/prettier */
import { Pool } from "@neondatabase/serverless";
import { VacancyFormValues } from "../types";
const bcrypt = require("bcrypt");
const saltRounds = 10;

// Create a connection pool using the Neon DATABASE_URL
const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

export default async function uploadDataNeon(values: VacancyFormValues): Promise<string> {
  try {
    // Validate input lengths
    if (values.contactName.length > 50) {
      throw new Error("Contact name exceeds the maximum length of 50 characters.");
    }

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

    // Hash sensitive data if necessary
    const hashedpinCode = await bcrypt.hash(values.pinCode, saltRounds);


    const params = [
      values.contactName,
      values.contactNumber,
      values.masjid,
      values.city,
      values.address,
      values.requirements,
      values.details,
      hashedpinCode
    ];

    const result = await pool.query<{ id: string }>(query, params);

    // Return the ID of the inserted row
    return result.rows[0].id;
  } catch (error) {
    console.error("Error inserting data into Neon DB:", error);
    throw new Error("Failed to insert data into Neon database.");
  }
}

