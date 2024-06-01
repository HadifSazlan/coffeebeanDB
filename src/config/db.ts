import dotenv from 'dotenv';

dotenv.config();

import {drizzle} from "drizzle-orm/node-postgres";
import pkg from 'pg';

import * as schemaRoasters from "../db/schema/roasters"
import * as schemaBeans from "../db/schema/beans"
import * as schemaBeanFlavours from "../db/schema/bean_flavours"
import * as schemaFlavours from "../db/schema/flavours"
import * as schemaSuppliers from "../db/schema/suppliers"

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

await client.connect();

export const db = drizzle(client, {
    schema: {
        ...schemaRoasters,
        ...schemaBeans,
        ...schemaSuppliers,
        ...schemaBeanFlavours,
        ...schemaFlavours
    }
});
