# Coffee Bean

## Requirements

- `pnpm`

## Installation

1. Create `.env` file by copying `.env.example`
   ```
   cp .env.example .env
   ```
2. Update app details in `.env`
   ```
   APP_NAME=coffeebean
   APP_URL=http://localhost:3000
   FE_URL=http://localhost:4000
   ```
3. Update the database details in `.env`
   ```
   DB_HOST=
   DB_PORT=
   DB_DATABASE=
   DB_USER=
   DB_PASSWORD=
   ```
4. Generate a JWT secret in terminal
   ```
   openssl rand -base64 60
   ```
5. Update the JWT_SECRET in `.env` with the string generated above
   ```
   JWT_SECRET=
   ```
6. `yarn install`
7. `yarn start`
8. To generate mysql files and run migration 
   ```
   yarn migrate
   ```
9. To seed the database with test data
   ```
   yarn db:seed
   ```

## References

- [Drizzle](https://orm.drizzle.team/docs/overview)
- [Passport](https://www.passportjs.org/)