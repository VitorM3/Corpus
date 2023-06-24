import { Module } from '@nestjs/common';
import AttendanceRepository from './app/repository/attendance.repository';
import DatabaseModule from 'src/core/database/database.module';
import AttendanceService from './app/service/attendance.service';
import AttendanceRoutes from './routes/attendance.routes';

@Module({
  imports: [DatabaseModule],
  providers: [AttendanceRepository, AttendanceService],
  controllers: [...AttendanceRoutes],
  exports: [AttendanceService],
})
export default class AttendanceModule {}
