import FindManyAttendanceDTO from 'src/modules/attendance/domain/dto/Find-many.dto';
import AttendanceRepository from '../../../repository/attendance.repository';

export default class FindManyAttendanceFunctionality {
  public constructor(private readonly repository: AttendanceRepository) {}

  protected async findManyInDatabase(dto: FindManyAttendanceDTO) {
    return await this.repository.views.findAll.many(
      dto.max,
      dto.page,
      dto.namePacient,
      dto.nameDoctor,
    );
  }
}
