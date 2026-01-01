import { Pool } from "@neondatabase/serverless";

const pool = new Pool({ connectionString: process.env.DATABASE_URL! });

export async function fetchAllData(tableName: string): Promise<any[]> {
  try {
    const query = `SELECT * FROM ${tableName};`;
    const result = await pool.query(query);
    return result.rows;
  } catch (error) {
    console.error("Error fetching all data:", error);
    throw error;
  }
}

export async function fetchDataById(tableName: string, id: number): Promise<any | null> {
  try {
    const query = `SELECT * FROM ${tableName} WHERE id = $1;`;
    const result = await pool.query(query, [id]);
    return result.rows[0] || null;
  } catch (error) {
    console.error("Error fetching data by ID:", error);
    throw error;
  }
}