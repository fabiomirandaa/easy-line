import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WaitersService } from './waiters.service';
import { CreateWaiterDto } from './dto/create-waiter.dto';

@Controller('waiters')
export class WaitersController {
  constructor(private readonly waitersService: WaitersService) { }

  @Post()
  create(@Body() createWaiterDto: CreateWaiterDto) {
    return this.waitersService.create(createWaiterDto);
  }

  @Get()
  async findAll() {
    try {
      const data =
        await this.waitersService.findAll();
      return {
        success: true,
        data,
        message: 'User Fetched Successfully',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waitersService.findOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waitersService.remove(id);
  }
}
