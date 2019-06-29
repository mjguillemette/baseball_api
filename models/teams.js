/*
  'id','int(11)','NO','PRI',NULL,'auto_increment'
  'location','varchar(255)','YES','',NULL,''
  'mascot','varchar(255)','YES','',NULL,''
  'abbreviation','varchar(3)','YES','',NULL,''
  'league','enum(\'AL\',\'NL\')','YES','',NULL,''
  'division','enum(\'East\',\'Central\',\'West\')','YES','',NULL,''
*/
module.exports = (connection, Sequelize) => {
  return connection.define('teams', {
    id: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
    location: { type: Sequelize.STRING },
    mascot: { type: Sequelize.STRING },
    abbreviation: { type: Sequelize.STRING },
    league: { type: Sequelize.ENUM('AL', 'NL') },
    division: { type: Sequelize.ENUM('East', 'Central', 'West') },
  })
}
