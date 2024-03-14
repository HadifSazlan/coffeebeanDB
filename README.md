# Coffee Bean

## Requirements
- `pnpm`

## Installation

1. `cp .env.example .env`
2. Update the database details in `.env`
   ```
   DB_HOST=
   DB_PORT=
   DB_DATABASE=
   DB_USER=
   DB_PASSWORD=
   ```
3. `npm install`
4. `npm start`
5. To generate mysql files based on migration schema: `npm run generate`
6. To push the sql migrations: `npm run push`

## References
- [Drizzle](https://orm.drizzle.team/docs/overview)