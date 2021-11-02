/* eslint-disable prettier/prettier */
import { SqlServerConnectionOptions } from 'typeorm/driver/sqlserver/SqlServerConnectionOptions';

const config: SqlServerConnectionOptions = {
  type: 'mssql',
  host: 'localhost',
  port: 1433,
  username: 'lautaronasello',
  password: 'lautaronasello',
  database: 'albumdb',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
  options: { encrypt: false },
};

export default config;

// {
//   "type": "mssql",
//   "host": "localhost",
//   "username": "lautaronasello",
//   "password": "lautaronasello",
//   "database": "albumdb",
//   "entities": "['dist/**/*.entity{.ts,.js}']",
//   "synchronize": true,
//   "extra": {
//     "trustServerCertificated": true
//   }

// }
