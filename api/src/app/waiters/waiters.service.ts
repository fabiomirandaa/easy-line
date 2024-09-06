import {
  HttpException,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { WaiterEntity } from './entities/waiter.entity';
import { CreateWaiterDto } from './dto/create-waiter.dto';

@Injectable()
export class WaitersService {
  constructor(
    @InjectRepository(WaiterEntity)
    private readonly waiterRepository: Repository<WaiterEntity>,
  ) {}

  async create(
    createWaiterDto: CreateWaiterDto,
  ): Promise<WaiterEntity> {
    const waiterData =
      await this.waiterRepository.create(
        createWaiterDto,
      );
    return this.waiterRepository.save(waiterData);
  }

  async findAll(): Promise<WaiterEntity[]> {
    return await this.waiterRepository.find();
  }

  async findOne(id: string): Promise<WaiterEntity> {
    const waiterData =
      await this.waiterRepository.findOneBy({ id });
    if (!waiterData) {
      throw new HttpException(
        'Waiter Not Found',
        404,
      );
    }
    return waiterData;
  }

  async remove(id: string): Promise<WaiterEntity> {
    const existingWaiter = await this.findOne(id);
    return await this.waiterRepository.remove(
      existingWaiter,
    );
  }
}
