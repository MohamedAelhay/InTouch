module.exports = {
  name: 'default',
  type: 'mysql',
  host: '127.0.0.1',
  port: 3306,
  username: 'root',
  password: 'root',
  database: 'in_touch',
  entities: ['src/**/*.entity.ts'],
  seeds: ['src/database/seeds/**/*{.ts,.js}'],
};
