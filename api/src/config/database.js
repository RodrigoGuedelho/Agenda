module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'admin',
  database: 'agenda',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  }
};
