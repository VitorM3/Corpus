import AttendanceRepository from "../../../repository/attendance.repository";

export default class DeleteAttendanceFunctionality {
    public constructor(
      private readonly attendanceRepository: AttendanceRepository,
    ) {}
    protected async delete(id:number){
        return await this.attendanceRepository.delete.one(id);
    }
}
