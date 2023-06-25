import AttendanceService from 'src/modules/attendance/app/service/attendance.service';
import AttendanceController from '../../decorator/Attendance.controller.decorator';
import { Delete, Get, Param, Query } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import FindManyAttendanceDTO from 'src/modules/attendance/domain/dto/Find-many.dto';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import ViewAttendanceFindAllEntity from 'src/modules/attendance/app/repository/views/entity/ViewAttendanceFindAll.view.entity';

@AttendanceController.default()
export default class DeleteAttendanceController {
  public constructor(private readonly service: AttendanceService) {}

  @Delete(':id')
  @ApiOperation({
    description: 'Deletar um atendimento com base no id',
    summary: 'Deletar um atendimento com base no id',
  })
  public async delete(@Param() id:number) {
    return await this.service.delete.execute(id);
  }
}
