import { Controller, Post, Get, Body } from '@nestjs/common';
import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { TestStoreDto } from './dto/test-store.dto';

@Controller('stores')
export class StoreController {
  constructor(private readonly storeService: StoreService) {}

  @Post()
  async createStore(@Body() dto: CreateStoreDto) {
    return this.storeService.createAndTestStore(dto);
  }

  @Post('test')
  async testStore(@Body() dto: TestStoreDto) {
    const success = await this.storeService.testConnection(
      dto.storeUrl,
      dto.consumerKey,
      dto.consumerSecret,
    );

    return {
      success,
      message: success ? 'Connected successfully' : 'Connection failed',
    };
  }

  @Get()
  async getStore() {
    return this.storeService.getStore();
  }
}
