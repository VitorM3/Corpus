import AttendanceRepository from '../../../repository/attendance.repository';
import FindOneAttendanceFunctionality from './functionality';

export default class FindOneAttendanceService extends FindOneAttendanceFunctionality {
  public constructor(private readonly repository: AttendanceRepository) {
    super(repository);
  }

  public async execute(id: number) {
    return await this.getOne(id);
  }
}
