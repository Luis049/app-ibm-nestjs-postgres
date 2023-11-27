import { TypeOrmModule } from '@nestjs/typeorm';
export const CONFIG_DATABASE = () =>
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    port: +process.env.DB_PORT,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    autoLoadEntities: true,
    synchronize: true,
    ssl: true, 
    extra: {
      ssl: {
        rejectUnauthorized: false, 
      },
    },
  });
