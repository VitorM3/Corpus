import PrismaService from 'src/core/database/app/prisma.service';
import AttendanceFindAllViewRepository from './class/attendance-find-all.view.repository';

export default class ViewsAttendanceRepository {
  public findAll: AttendanceFindAllViewRepository;
  public constructor(private readonly PrismaService: PrismaService) {
    this.findAll = new AttendanceFindAllViewRepository(
      this.PrismaService.vw_attendance_find_all,
      this.PrismaService,
    );
  }
}
