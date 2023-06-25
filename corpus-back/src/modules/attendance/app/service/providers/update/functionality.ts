import CreateToolsMeetingDTO from 'src/modules/attendance/domain/dto/Create/Create-tools-meeting.dto';
import MeetingsCreateDTO from 'src/modules/attendance/domain/dto/Create/meetings-create.dto';
import AttendanceRepository from '../../../repository/attendance.repository';
import { Prisma } from '@prisma/client';

export default class UpdateAttendanceFunctionality {
  public constructor(
    private readonly attendanceRepository: AttendanceRepository,
  ) {}

  protected createObjectOfTools(
    tools: CreateToolsMeetingDTO[],
  ): Prisma.meeting_toolUncheckedCreateWithoutMeetingInput[] {
    return tools.map((tool) => {
      return { tool_id: tool.toolId, quantity: tool.qtd };
    });
  }

  protected createObjectOfMeetings(
    meetings: MeetingsCreateDTO[],
    tools: Prisma.meeting_toolUncheckedCreateWithoutMeetingInput[],
  ): Prisma.meetingUncheckedCreateWithoutAttendancesInput[] {
    return meetings.map((meeting) => {
      return {
        room_id: meeting.roomId,
        appointment: meeting.date,
        exercise_meeting: {
          create: [{ exercise_id: meeting.exerciseId }],
        },
        meeting_tool: {
          create: tools,
        },
      };
    });
  }

  protected async updateAppointment(
    id: number,
    params: Prisma.attendancesUncheckedCreateInput,
  ) {
    return await this.attendanceRepository.update.one(id, params);
  }
}
