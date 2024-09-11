// models/Subscriber.ts
import { DataTypes } from 'sequelize';
import sequelize from '../lib/sequelize';  // Import the existing Sequelize instance

const Subscriber = sequelize.define('Subscriber', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
    },
}, {
    tableName: 'Subscriber',  // Fix typo if necessary
    timestamps: true,
});

export default Subscriber;
