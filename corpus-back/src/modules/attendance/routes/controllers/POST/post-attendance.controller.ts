import { Body, Post } from '@nestjs/common';
import AttendanceController from '../../decorator/Attendance.controller.decorator';
import { ApiOperation } from '@nestjs/swagger';
import CreateAttendanceDto from 'src/modules/attendance/domain/dto/Create/Create.dto';
import AttendanceService from 'src/modules/attendance/app/service/attendance.service';

@AttendanceController.default()
export default class PostAttendanceController {
  public constructor(private readonly service: AttendanceService) {}

  @Post()
  @ApiOperation({
    description: 'Criar um novo atendimento',
    summary: 'Criar um novo atendimento',
  })
  public async create(@Body() dto: CreateAttendanceDto) {
    return await this.service.create.execute(dto);
  }
}
