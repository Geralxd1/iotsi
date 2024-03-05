module.exports = {
  PORT: process.env.PORT || 3000,
  HOST: process.env.DB_HOST || 'localhost',
  USER: process.env.DB_USER || 'root',
  PASSWORD: process.env.DB_PASSWORD || '',
  DB: process.env.DB_NAME || 'iot_2024',
  DB_PORT : process.env.DB_PORT || 3306
};