const Sequelize = require('sequelize');

const Workers = require('../app/models/Workers');

const models = [Workers];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(process.env.DATABASE_URL, {
      dialect: 'postgres',
      protocol: 'postgres',
      dialectOptions: {
        ssl: true,
      },
    });

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
