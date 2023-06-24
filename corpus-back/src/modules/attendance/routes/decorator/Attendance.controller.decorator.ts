import { Controller, applyDecorators } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';

export default class AttendanceController {
  public static default() {
    return applyDecorators(Controller('attendance'), ApiTags('Attendance'));
  }
}
