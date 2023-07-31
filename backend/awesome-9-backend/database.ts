import { Sequelize } from 'sequelize-typescript';

// Replace these values with your actual PostgreSQL database credentials
const dbUsername = 'your_db_username';
const dbPassword = 'your_db_password';
const dbName = 'your_db_name';
const dbHost = 'your_db_host';

export const sequelize = new Sequelize({
  database: dbName,
  username: dbUsername,
  password: dbPassword,
  host: dbHost,
  dialect: 'postgres',
  models: [__dirname + '/entities'], // Directory where your entity models are located
  logging: false, // Set to true if you want to see Sequelize logs
});
