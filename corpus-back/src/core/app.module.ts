import { Module } from '@nestjs/common';
import DatabaseModule from './database/database.module';
import AttendanceModule from 'src/modules/attendance/attendance.module';
import PacientModule from 'src/modules/pacient/pacient.module';

@Module({
  imports: [DatabaseModule, AttendanceModule, PacientModule],
})
export default class AppModule {}
