/* eslint-disable prettier/prettier */

import { Pool } from "@neondatabase/serverless";
// Create a connection pool using the Neon DATABASE_URL
if (!process.env.DATABASE_URL) {
    throw new Error("DATABASE_URL environment variable is not set.");
}
const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

export default async function deleteVacancyNeon(contact_name: string, contact_number: string, pin_code: string): Promise<void> {
    try {
    // Validate credentials before deletion
    const isValid = await validateCredentials(contact_name, contact_number, pin_code);
    if (!isValid) {
        throw new Error("Invalid credentials.");
    }
    } catch (error) {
        throw new Error("Failed to validate credentials.");
    }
    // Delete the vacancy from the Neon database
    try {
        const query = `DELETE FROM public.vacancies WHERE contact_name = $1 AND contact_number = $2 AND pin_code = $3`;
        const params = [contact_name, contact_number, pin_code];
        const client = await pool.connect();
        await client.query(query, params);
        client.release();
    } catch (error) {
        throw new Error("Failed to delete vacancy from Neon database.");
    }
}

const validateCredentials = async function(contact_name: string, contact_number: string, pin_code: string): Promise<boolean> {
try { 
    const query = `SELECT * FROM public.vacancies WHERE contact_name = $1 AND contact_number = $2 AND pin_code = $3 LIMIT 1`;
    const params = [contact_name, contact_number, pin_code];
    const client = await pool.connect();
    const result = await client.query(query, params);
    client.release();
    if (result.rowCount === 0) {
        return false;
    }
} catch (error) {
    console.error("Error validating credentials:", error);
    throw new Error("Failed to validate credentials.");
}
    return true;
}