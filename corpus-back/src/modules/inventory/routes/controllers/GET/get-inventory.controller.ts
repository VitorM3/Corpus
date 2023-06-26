import InventoryController from '../../decorators/inventory.controller.decorator';
import { Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import FindManyInventoryDTO from 'src/modules/exercise/domain/dto/find-many.dto';
import InventoryEntity from 'src/modules/inventory/app/repository/entity/inventory.entity';
import InventoryService from 'src/modules/inventory/app/service/inventory.service';

@InventoryController.default()
export default class GetInventoryController {
  public constructor(private readonly service: InventoryService) {}

  @Get()
  @ApiOperation({
    description: 'Buscar todos os itens cadastrados no sistema',
    summary: 'Buscar todos os itens cadastrados no sistema',
  })
  @ApiResponse({
    schema: {
      description: 'Dados buscados com sucesso',
      example: {
        data: [
          {
            id: 1,
            name: 'Bandeide',
            quantity: 1,
          },
        ],
        pages: 10,
        perPage: 50,
        total: 350,
      } as GetManyReturn<InventoryEntity>,
    },
    status: 200,
  })
  public async findMany(@Query() dto: FindManyInventoryDTO) {
    return await this.service.findMany.execute(dto);
  }
}
