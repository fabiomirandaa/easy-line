import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaitersModule } from './waiters/waiters.module';
import { WaiterEntity } from './waiters/entities/waiter.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT),
      password: process.env.POSTGRES_PASSWORD,
      username: process.env.POSTGRES_USER,
      entities: [WaiterEntity],

      database: process.env.POSTGRES_DATABASE,
      synchronize: true,
      logging: true,
    }),
    WaitersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
