import { Injectable } from '@nestjs/common';
import AttendanceRepository from '../repository/attendance.repository';
import FindManyAttendanceService from './providers/find-many/service';
import CreateAttendanceService from './providers/create/service';
import DeleteAttendanceService from './providers/delete/service';
import UpdateAttendanceService from './providers/update/service';
import FindOneAttendanceService from './providers/find-one/service';

@Injectable()
export default class AttendanceService {
  public findMany: FindManyAttendanceService;
  public findOne: FindOneAttendanceService;
  public create: CreateAttendanceService;
  public delete: DeleteAttendanceService;
  public update: UpdateAttendanceService;
  public constructor(
    private readonly attendanceRepository: AttendanceRepository,
  ) {
    this.findMany = new FindManyAttendanceService(this.attendanceRepository);
    this.findOne = new FindOneAttendanceService(this.attendanceRepository);
    this.create = new CreateAttendanceService(this.attendanceRepository);
    this.delete = new DeleteAttendanceService(this.attendanceRepository);
  }
}
