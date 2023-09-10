import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'postgres',
        host: process.env['POSTGRES_HOST'] || 'localhost',
        port: 5432,
        username: 'root',
        password: 'p@ssword',
        database: 'payments',
        entities: [
            __dirname + '/../**/*.entity{.ts,.js}',
        ],
        synchronize: true,
        logging: ["error"]
      });

      return dataSource.initialize();
    },
  },
];