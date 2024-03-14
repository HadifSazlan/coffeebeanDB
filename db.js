import dotenv from 'dotenv';

dotenv.config();

import {drizzle} from "drizzle-orm/node-postgres";
import pkg from 'pg';
const {Client} = pkg;

const host = process.env.DB_HOST ?? 'localhost';
const port = process.env.DB_PORT ?? '5432';
const database = process.env.DB_DATABASE ?? 'your_database';
const user = process.env.DB_USER ?? 'your_username';
const password = process.env.DB_PASSWORD ?? 'your_password';

const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;

const client = new Client({
    connectionString: connectionString,
});

try {
    await client.connect();
} catch (err) {
    console.error('Error connecting to PostgreSQL database:', err);
}

const db = drizzle(client);

export { db };
