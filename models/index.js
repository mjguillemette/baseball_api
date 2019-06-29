var Sequelize = require('sequelize')
var config = require('../config/sequelize').development
var TeamModel = require('./teams')

var connection = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  dialect: config.dialect
})

var Teams = TeamModel(connection, Sequelize)

module.exports = {
  Teams
}
