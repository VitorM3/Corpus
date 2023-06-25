import AttendanceRepository from "../../../repository/attendance.repository";
import DeleteAttendanceFunctionality from "./functionality";

export default class DeleteAttendanceService extends DeleteAttendanceFunctionality {
    public constructor(private readonly repository: AttendanceRepository) {
      super(repository);
    }
    public async execute(id:number){
        return await this.delete(id);
    }
}