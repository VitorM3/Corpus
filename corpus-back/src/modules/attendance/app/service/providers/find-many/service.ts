import FindManyAttendanceFunctionality from './functionality';
import FindManyAttendanceDTO from 'src/modules/attendance/domain/dto/Find-many.dto';
import AttendanceRepository from '../../../repository/attendance.repository';

export default class FindManyAttendanceService extends FindManyAttendanceFunctionality {
  public constructor(
    private readonly attendanceRepository: AttendanceRepository,
  ) {
    super(attendanceRepository);
  }
  public async execute(dto: FindManyAttendanceDTO) {
    return await this.findManyInDatabase(dto);
  }
}
