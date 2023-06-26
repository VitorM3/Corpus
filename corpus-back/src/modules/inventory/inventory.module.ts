import { Module } from '@nestjs/common';
import InventoryRepository from './app/repository/inventory.repository';
import InventoryService from './app/service/inventory.service';
import InventoryRoutes from './routes/inventory.routes';

@Module({
  providers: [InventoryRepository, InventoryService],
  controllers: [...InventoryRoutes],
  exports: [InventoryService],
})
export default class InventoryModule {}
