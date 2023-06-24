import AttendanceRepository from '../../../repository/attendance.repository';

export default class FindManyAttendanceFunctionality {
  public constructor(private readonly repository: AttendanceRepository) {}

  protected async findManyInDatabase(max: number, page: number) {
    return await this.repository.views.findAll.many(max, page);
  }
}
