"use strict";

const fs = require("fs");
const path = require("path");
const Sequelize = require("sequelize");
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || "development";
const config = require(__dirname + "/../config/config.json")[env];
const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

fs.readdirSync(__dirname)
  .filter(function(file) {
    return (
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
    );
  })
  .forEach(function(file) {
    const model = sequelize["import"](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.user = require("../models/user")(sequelize, Sequelize);
db.admin = require("../models/admin_list")(sequelize, Sequelize);
db.members = require("../models/members")(sequelize, Sequelize);
db.login = require("../models/login")(sequelize, Sequelize);
db.role = require("../models/role")(sequelize, Sequelize);
db.userandrole = require("../models/userandrole")(sequelize, Sequelize);
db.user_active = require("../models/user_active")(sequelize, Sequelize);
db.user_not_active = require("../models/user_not_active")(sequelize, Sequelize);
db.adressbook = require("../models/adressbook")(sequelize, Sequelize);

module.exports = db;
