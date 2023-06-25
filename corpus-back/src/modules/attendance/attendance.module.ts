import { Module } from '@nestjs/common';
import AttendanceRepository from './app/repository/attendance.repository';
import AttendanceService from './app/service/attendance.service';
import AttendanceRoutes from './routes/attendance.routes';

@Module({
  providers: [AttendanceRepository, AttendanceService],
  controllers: [...AttendanceRoutes],
  exports: [AttendanceService],
})
export default class AttendanceModule {}
