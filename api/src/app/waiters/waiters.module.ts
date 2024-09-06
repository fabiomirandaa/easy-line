import { Module } from '@nestjs/common';
import { WaitersService } from './waiters.service';
import { WaitersController } from './waiters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WaiterEntity } from './entities/waiter.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([WaiterEntity]),
  ],
  controllers: [WaitersController],
  providers: [WaitersService],
})
export class WaitersModule { }
