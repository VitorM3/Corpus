import { Controller, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export default class InventoryController {
  public static default() {
    return applyDecorators(Controller('inventory'), ApiTags('Inventory'));
  }
}
