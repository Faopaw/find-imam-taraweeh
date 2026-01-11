/* eslint-disable prettier/prettier */
const bcrypt = require("bcrypt");
const saltRounds = 10;

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

        // Get the hashed pin code
        const hashedPinCode = await getHashedPinCode(contact_name, contact_number);

        // Delete the vacancy from the Neon database
        const query = `DELETE FROM public.vacancies WHERE contact_name = $1 AND contact_number = $2 AND pin_code = $3`;
        const params = [contact_name, contact_number, hashedPinCode];
        const client = await pool.connect();
        const result = await client.query(query, params);
        client.release();

        // Check if any rows were deleted
        if (result.rowCount === 0) {
            throw new Error("No matching record found to delete.");
        }
    } catch (error) {
        console.error("Error deleting vacancy:", error);
        throw new Error("Failed to delete vacancy from Neon database.");
    }
}

const validateCredentials = async function(contact_name: string, contact_number: string, pin_code: string): Promise<boolean> {
try { 
    // Validate credentials before deletion
    const query = `SELECT * FROM public.vacancies WHERE contact_name = $1 AND contact_number = $2 AND pin_code = $3 LIMIT 1`;
    // get stored hashed pin code and compare
    const storedHashedPinCode = await getHashedPinCode(contact_name, contact_number);
    const isMatch = await bcrypt.compare(pin_code, storedHashedPinCode);
    if (!isMatch) {
        return false;
    }
    const params = [contact_name, contact_number, storedHashedPinCode]; 
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

const getHashedPinCode = async function(contact_name: string, contact_number: string): Promise<string> {
    const query = "SELECT pin_code FROM vacancies WHERE contact_name = $1 AND contact_number = $2 LIMIT 1";
    const params = [contact_name, contact_number];
    const client = await pool.connect();
    const result = await client.query(query, params);
    client.release();
    if (result.rowCount === 0) {
        throw new Error("No pin code found for the given contact.");
    }
    return result.rows[0].pin_code;
}