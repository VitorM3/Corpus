import RoomService from 'src/modules/room/app/service/room.services';
import RoomController from '../../decorators/room.controller.decorator';
import { Get, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import RoomEntity from 'src/modules/room/app/repository/entity/room.entity';
import FindManyRoomDTO from 'src/modules/room/domain/dto/find-many.dto';

@RoomController.default()
export default class GetRoomController {
  public constructor(private readonly service: RoomService) {}

  @Get()
  @ApiOperation({
    description: 'Buscar todas as salas cadastrados no sistema',
    summary: 'Buscar todas as salas cadastrados no sistema',
  })
  @ApiResponse({
    schema: {
      description: 'Dados buscados com sucesso',
      example: {
        data: [
          {
            id: 1,
            name: 'Sala de atendimento 01',
            occupied: false,
          },
        ],
        pages: 10,
        perPage: 50,
        total: 350,
      } as GetManyReturn<RoomEntity>,
    },
    status: 200,
  })
  public async findMany(@Query() dto: FindManyRoomDTO) {
    return await this.service.findMany.execute(dto);
  }
}
