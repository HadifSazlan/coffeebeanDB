import dotenv from 'dotenv';

dotenv.config()

import {drizzle} from 'drizzle-orm/node-postgres';
import {beanology} from '../schema/beanology.js';
import {roasters} from '../schema/roasters.js';
import {suppliers} from '../schema/suppliers.js';
import pkg from 'pg';

const {Pool} = pkg;


const host = process.env.DB_HOST ?? 'localhost';
const port = process.env.DB_PORT ?? '5432';
const database = process.env.DB_DATABASE ?? 'your_database';
const user = process.env.DB_USER ?? 'your_username';
const password = process.env.DB_PASSWORD ?? 'your_password';

const connectionString = `postgresql://${user}:${password}@${host}:${port}/${database}`;

const pool = new Pool({
    connectionString: connectionString,
});

const db = drizzle(pool);

async function main() {
    console.log('testSeeder initialised');

    await db.insert(roasters).values(roastersData).returning();
    await db.insert(suppliers).values(suppliersData).returning();
    await db.insert(beanology).values(beanologyData).returning();

    console.log('Data insertion completed');
    process.exit(0);
}

const beanologyData = [
    {
        id: 1,
        roaster_id: 1,
        supplier_id: 1,
        name: 'Fruits from Skytopia',
        origin: 'Ethiopia',
        flavor: 'Fruity and floral',
        process: 'Washed',
        altitude: '2000 meters',
    },
    {
        id: 2,
        roaster_id: 1,
        supplier_id: 2,
        name: 'Pirates Ohoy!',
        origin: 'Colombia',
        flavor: 'Chocolate and nutty',
        process: 'Natural',
        altitude: '1500 meters',
    },
    {
        id: 3,
        roaster_id: 2,
        supplier_id: 3,
        name: 'Seeds of Fury',
        origin: 'Brazil',
        flavor: 'Caramel and nutty',
        process: 'Semi-washed',
        altitude: '1200 meters',
    },
    {
        id: 4,
        roaster_id: 3,
        supplier_id: 3,
        name: 'None the Sweeter',
        origin: 'Guatemala',
        flavor: 'Citrus and floral',
        process: 'Fully washed',
        altitude: '1600 meters',
    },
    {
        id: 5,
        roaster_id: 4,
        supplier_id: 3,
        name:'Bolt of Lightning',
        origin: 'Kenya',
        flavor: 'Berry-like and winey',
        process: 'Double fermented',
        altitude: '1800 meters',
    },
];

const roastersData = [
    {
        id: 1,
        name: 'JavaBeans Roastery',
        email: 'javabeans@example.com',
        phone: '123-456-7890',
    },
    {
        id: 2,
        name: 'RoastMasters',
        email: 'roastmasters@example.com',
        phone: '987-654-3210',
    },
    {
        id: 3,
        name: 'BeanCrafters',
        email: 'beancrafters@example.com',
        phone: '111-222-3333',
    },
    {
        id: 4,
        name: 'Pagi dan Malam',
        email: 'pagidanmalam@example.com',
        phone: '555-666-7777',
    },
];

const suppliersData = [
    {
        id: 1,
        name: 'CoffeeHouse Suppliers',
        email: 'coffeehouse@example.com',
        phone: '123-456-7890',
    },
    {
        id: 2,
        name: 'BeanWorld',
        email: 'beanworld@example.com',
        phone: '987-654-3210',
    },
    {
        id: 3,
        name: 'RoastNBeans Co.',
        email: 'roastnbeans@example.com',
        phone: '111-222-3333',
    },
    {
        id: 4,
        name: 'Java Roasters',
        email: 'java@example.com',
        phone: '999-888-7777',
    },
];

main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});