import AttendanceService from 'src/modules/attendance/app/service/attendance.service';
import AttendanceController from '../../decorator/Attendance.controller.decorator';
import { Delete, Param } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';

@AttendanceController.default()
export default class DeleteAttendanceController {
  public constructor(private readonly service: AttendanceService) {}

  @Delete(':id')
  @ApiOperation({
    description: 'Deletar um atendimento com base no id',
    summary: 'Deletar um atendimento com base no id',
  })
  public async delete(@Param('id') id: number) {
    return await this.service.delete.execute(id);
  }
}
