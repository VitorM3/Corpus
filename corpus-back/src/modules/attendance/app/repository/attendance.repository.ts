import { Injectable } from '@nestjs/common';
import PrismaService from 'src/core/database/app/prisma.service';
import GetAttendanceRepository from './class/get-attendance.repository';
import { AttendanceTableType } from 'src/modules/attendance/domain/types/AttendanceTable.type';
import ViewsAttendanceRepository from './views/ViewAttendance.views.repository';
import PostAttendanceRepository from './class/post-attendance.repository';

@Injectable()
export default class AttendanceRepository {
  private readonly attendanceTableConnection: AttendanceTableType;

  public views: ViewsAttendanceRepository;
  public get: GetAttendanceRepository;
  public post: PostAttendanceRepository;
  public constructor(private readonly prismaService: PrismaService) {
    this.attendanceTableConnection = this.prismaService.attendances;

    this.views = new ViewsAttendanceRepository(this.prismaService);
    this.get = new GetAttendanceRepository(
      this.attendanceTableConnection,
      this.prismaService,
    );
    this.post = new PostAttendanceRepository(this.prismaService);
  }
}
