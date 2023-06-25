import CreateAttendanceDto from 'src/modules/attendance/domain/dto/Create/Create.dto';
import AttendanceRepository from '../../../repository/attendance.repository';
import CreateAttendanceFunctionality from './functionality';

export default class CreateAttendanceService extends CreateAttendanceFunctionality {
  public constructor(private readonly repository: AttendanceRepository) {
    super(repository);
  }

  public async execute(dto: CreateAttendanceDto) {
    const tools = this.createObjectOfTools(dto.tools);
    const meetings = this.createObjectOfMeetings(dto.meetings, tools);
    return await this.createAppointment({
      attendant_id: 1,
      doctor_id: dto.doctorId,
      description: dto.description,
      pacient_id: dto.pacientId,
      meeting: {
        create: meetings,
      },
    });
  }
}
