import { Body, Param, Patch } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import AttendanceService from 'src/modules/attendance/app/service/attendance.service';
import CreateAttendanceDto from 'src/modules/attendance/domain/dto/Create/Create.dto';
import AttendanceController from '../../decorator/Attendance.controller.decorator';

@AttendanceController.default()
export default class PatchAttendanceController {
  public constructor(private readonly service: AttendanceService) {}

  @Patch(':id')
  @ApiOperation({
    description: 'Editar um atendimento',
    summary: 'Editar um atendimento',
  })
  public async update(
    @Param('id') id: number,
    @Body() dto: CreateAttendanceDto,
  ) {
    return await this.service.update.execute(id, dto);
  }
}
