/**
 *  Database configuration.
 *  TODO use nestjs-dynamoose to configure a DynamoDB backend
 */
export default () => ({
    type: 'mongodb',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    entities: [__dirname + '/**/*.entity{.ts,.js}'],
    synchronize: true,
});