import dotenv from 'dotenv';
dotenv.config();
import { drizzle } from 'drizzle-orm/node-postgres';
import { beans } from '../schema/beans.js';
import { roasters } from '../schema/roasters.js';
import { suppliers } from '../schema/suppliers.js';
import pkg from 'pg';
import { RoastType } from './../../enums/RoastType.js';
import { BrewType } from './../../enums/BrewType.js';
import { BeanOrigin } from './../../enums/BeanOrigin.js';
import { ProcessMethod } from './../../enums/ProcessMethod.js';
const { Pool } = pkg;
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
    await db.insert(beans).values(beansData).returning();
    console.log('Data insertion completed');
    process.exit(0);
}
const beansData = [
    {
        id: 1,
        roaster_id: 1,
        supplier_id: 1,
        name: 'Fruits from Skytopia',
        slug: 'fruits-from-skytopia',
        roast_profile: RoastType.LIGHT,
        brew_type: BrewType.FILTER,
        origin: BeanOrigin.ETHIOPIA,
        process: ProcessMethod.WASHED,
        altitude: '2000',
        link: 'https://bean.com/test-1'
    },
    {
        id: 2,
        roaster_id: 1,
        supplier_id: 2,
        name: 'Pirates Ohoy!',
        slug: 'pirates-ohoy',
        roast_profile: RoastType.MEDIUM_LIGHT,
        brew_type: BrewType.OMNI_ROAST,
        origin: BeanOrigin.GUATEMALA,
        process: ProcessMethod.NATURAL,
        altitude: '1500',
        link: 'https://bean.com/test-2'
    },
    {
        id: 3,
        roaster_id: 2,
        supplier_id: 3,
        name: 'Seeds of Fury',
        slug: 'seeds-of-fury',
        roast_profile: RoastType.MEDIUM,
        brew_type: BrewType.ESPRESSO,
        origin: BeanOrigin.COLOMBIA,
        process: ProcessMethod.SEMI_WASHED,
        altitude: '1500',
        link: 'https://bean.com/test-3'
    },
    {
        id: 4,
        roaster_id: 3,
        supplier_id: 3,
        name: 'None the Sweeter',
        slug: 'none-the-sweeter',
        roast_profile: RoastType.LIGHT,
        brew_type: BrewType.FILTER,
        origin: BeanOrigin.GUATEMALA,
        process: ProcessMethod.FULLY_WASHED,
        altitude: '1600',
        link: 'https://bean.com/test-4'
    },
    {
        id: 5,
        roaster_id: 4,
        supplier_id: 3,
        name: 'Bolt of Lightning',
        slug: 'bolt-of-lightning',
        roast_profile: RoastType.LIGHT,
        brew_type: BrewType.FILTER,
        origin: BeanOrigin.KENYA,
        process: ProcessMethod.FULLY_WASHED,
        altitude: '1800',
        link: 'https://bean.com/test-5'
    },
];
const roastersData = [
    {
        id: 1,
        name: 'JavaBeans Roastery',
        slug: 'javabeans-roastery',
        email: 'javabeans@example.com',
        phone: '123-456-7890',
    },
    {
        id: 2,
        name: 'RoastMasters',
        slug: 'roast-masters',
        email: 'roastmasters@example.com',
        phone: '987-654-3210',
    },
    {
        id: 3,
        name: 'BeanCrafters',
        slug: 'bean-crafters',
        email: 'beancrafters@example.com',
        phone: '111-222-3333',
    },
    {
        id: 4,
        name: 'Pagi dan Malam',
        slug: 'pagi-dan-malam',
        email: 'pagidanmalam@example.com',
        phone: '555-666-7777',
    },
];
const suppliersData = [
    {
        id: 1,
        name: 'CoffeeHouse Suppliers',
        slug: 'coffee-house-suppliers',
        email: 'coffeehouse@example.com',
        phone: '123-456-7890',
    },
    {
        id: 2,
        name: 'BeanWorld',
        slug: 'bean-world',
        email: 'beanworld@example.com',
        phone: '987-654-3210',
    },
    {
        id: 3,
        name: 'RoastNBeans Co.',
        slug: 'roast-n-beans-co',
        email: 'roastnbeans@example.com',
        phone: '111-222-3333',
    },
    {
        id: 4,
        name: 'Java Roasters',
        slug: 'java-roasters',
        email: 'java@example.com',
        phone: '999-888-7777',
    },
];
main().catch(err => {
    console.error('Error:', err);
    process.exit(1);
});
