// lib/sequelize.ts
import { Sequelize } from 'sequelize';
import * as config from '../config/config.json';

const env = process.env.NODE_ENV || 'development';
const dbConfig = config[env];

// Create a new Sequelize instance using config.json values
export const sequelize = new Sequelize(
    dbConfig.database,
    dbConfig.username,
    dbConfig.password,
    {
        host: dbConfig.host,
        dialect: dbConfig.dialect as 'mysql',
        logging: false, // Disable logging, enable for raw SQL queries
    }
);

// Function to test connection
export const testConnection = async (): Promise<void> => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        throw new Error('Database connection failed');
    }
};

export default sequelize;
