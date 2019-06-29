module.exports = {
  development: {
    host: "localhost",
    database: "baseball",
    username: "baseball",
    password: process.env.BASEBALL_PWD,
    dialect: "mysql",
  }
}
