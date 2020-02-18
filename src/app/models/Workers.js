const { Sequelize, Model } = require('sequelize');

class Workers extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        age: Sequelize.INTEGER,
        office: Sequelize.STRING,
      },
      {
        sequelize,
      },
    );

    return this;
  }
}

module.exports = Workers;
