import { Injectable } from '@nestjs/common';
import AttendanceRepository from '../repository/attendance.repository';
import FindManyAttendanceService from './providers/find-many/service';

@Injectable()
export default class AttendanceService {
  public findMany: FindManyAttendanceService;
  public constructor(
    private readonly attendanceRepository: AttendanceRepository,
  ) {
    this.findMany = new FindManyAttendanceService(this.attendanceRepository);
  }
}
