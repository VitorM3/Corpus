import AttendanceRepository from '../../../repository/attendance.repository';

export default class FindOneAttendanceFunctionality {
  public constructor(
    private readonly attendanceRepository: AttendanceRepository,
  ) {}

  protected async getOne(id: number) {
    return await this.attendanceRepository.get.one(id, {
      select: {
        attendant: true,
        doctor: true,
        description: true,
        meetings_number: true,
        meeting: {
          select: {
            appointment: true,
            meeting_tool: true,
            room: true,
            exercise_meeting: {
              select: {
                exercise: true,
              },
            },
          },
        },
      },
    });
  }
}
