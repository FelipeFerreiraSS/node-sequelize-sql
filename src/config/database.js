// module.exports = {
//   dialect: 'postgres',
//   host: 'localhost',
//   username: 'docker',
//   password: 'docker',
//   database: 'sqlnode',
//   define: {
//     timestamps: true,
//     underscored: true
//   }
// }

const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  dialect: 'postgres',
    development: {
    url: process.env.DATABASE_URL,
    dialect: 'postgres',
    dialectOptions: { ssl: { require: true } },
  },
  define: {
    timestamps: true,
    underscored: true
  }
};