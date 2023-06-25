import AttendanceService from 'src/modules/attendance/app/service/attendance.service';
import AttendanceController from '../../decorator/Attendance.controller.decorator';
import { Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import FindManyAttendanceDTO from 'src/modules/attendance/domain/dto/Find-many.dto';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import ViewAttendanceFindAllEntity from 'src/modules/attendance/app/repository/views/entity/ViewAttendanceFindAll.view.entity';

@AttendanceController.default()
export default class GetAttendanceController {
  public constructor(private readonly service: AttendanceService) {}

  @Get()
  @ApiOperation({
    description: 'Buscar todos os atendimentos cadastrados no sistema',
    summary: 'Buscar todos os atendimentos cadastrados no sistema',
  })
  @ApiResponse({
    schema: {
      description: 'Dados buscados com sucesso',
      example: {
        data: [
          {
            description: 'Exemplo de descrição',
            doctor: 'Vitor Loch',
            id: 1,
            meetingsQtd: 10,
            meetingsWithoutPresenceQtd: 5,
            meetingsWithPresence: 5,
            pacient: 'Danilo',
          },
        ],
        pages: 10,
        perPage: 50,
        total: 350,
      } as GetManyReturn<ViewAttendanceFindAllEntity>,
    },
    status: 200,
  })
  public async findMany(@Query() dto: FindManyAttendanceDTO) {
    return await this.service.findMany.execute(dto);
  }

  @Get(':id')
  @ApiOperation({
    description: 'Buscar apenas um atendimento com base no id',
    summary: 'Buscar apenas um atendimento com base no id',
  })
  public async findOne(@Param('id') id: number) {
    return await this.service.findOne.execute(id);
  }
}
