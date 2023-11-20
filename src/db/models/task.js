const { Model, DataTypes } = require('sequelize')

const TASK_TABLE = 'TASKS'

const TaskSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,

    },
    description: {
        type: DataTypes.STRING,
    }
}

class Task extends Model {
    static associate() { }

    static config(sequelize) {
        return {
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Tasks',
            timestamps: false
        }
    }
}

module.exports = { TASK_TABLE, TaskSchema, Task }