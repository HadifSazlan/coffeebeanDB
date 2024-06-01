import 'dotenv/config';
const host = process.env.DB_HOST ?? 'localhost';
const port = process.env.DB_PORT ?? '5432';
const database = process.env.DB_DATABASE ?? 'your_database';
const user = process.env.DB_USER ?? 'your_username';
const password = process.env.DB_PASSWORD ?? 'your_password';
const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;
const config = {
    schema: './src/db/schema/*',
    out: './src/db/migrations',
    driver: 'pg',
    dbCredentials: {
        connectionString: connectionString
    },
};
export default config;
