const Sequelize = require('sequelize');

const Workers = require('../app/models/Workers');

const databaseConfig = require('../config/database');

const models = [Workers];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models.map(model => model.init(this.connection));
  }
}

module.exports = new Database();
