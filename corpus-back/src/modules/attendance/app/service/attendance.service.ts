import { Injectable } from '@nestjs/common';
import AttendanceRepository from '../repository/attendance.repository';
import FindManyAttendanceService from './providers/find-many/service';
import CreateAttendanceService from './providers/create/service';

@Injectable()
export default class AttendanceService {
  public findMany: FindManyAttendanceService;
  public create: CreateAttendanceService;
  public constructor(
    private readonly attendanceRepository: AttendanceRepository,
  ) {
    this.findMany = new FindManyAttendanceService(this.attendanceRepository);
    this.create = new CreateAttendanceService(this.attendanceRepository);
  }
}
