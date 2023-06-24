import { Module } from '@nestjs/common';
import DatabaseModule from './database/database.module';
import AttendanceModule from 'src/modules/attendance/attendance.module';

@Module({
  imports: [DatabaseModule, AttendanceModule],
})
export default class AppModule {}
