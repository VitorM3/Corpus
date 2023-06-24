import { Injectable } from '@nestjs/common';
import PrismaService from 'src/core/database/app/prisma.service';
import GetAttendanceRepository from './class/get-attendance.repository';
import { AttendanceTableType } from 'src/modules/attendance/domain/types/AttendanceTable.type';
import ViewsAttendanceRepository from './views/ViewAttendance.views.repository';

@Injectable()
export default class AttendanceRepository {
  private readonly attendanceTableConnection: AttendanceTableType;

  public views: ViewsAttendanceRepository;
  public get: GetAttendanceRepository;
  public constructor(private readonly prismaService: PrismaService) {
    this.attendanceTableConnection = this.prismaService.attendances;

    this.views = new ViewsAttendanceRepository(this.prismaService);
    this.get = new GetAttendanceRepository(
      this.attendanceTableConnection,
      this.prismaService,
    );
  }
}
