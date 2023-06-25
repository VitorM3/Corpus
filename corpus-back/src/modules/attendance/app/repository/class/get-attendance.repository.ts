import { Prisma } from '@prisma/client';
import PrismaService from 'src/core/database/app/prisma.service';
import { AttendanceTableType } from 'src/modules/attendance/domain/types/AttendanceTable.type';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import GetManyTypeParams from 'src/shared/base/domain/types/GetManyType';
import BaseRepository from 'src/shared/base/repository/base.repository';
import AttendancesEntity, {
  AttendancesEntityType,
} from '../entity/Attendance.entity';

export default class GetAttendanceRepository extends BaseRepository {
  public constructor(
    private readonly attendanceTableConnection: AttendanceTableType,
    private readonly prismaService: PrismaService,
  ) {
    super();
  }

  public async many({
    max,
    page,
    select,
    where,
  }: GetManyTypeParams<
    Prisma.attendancesSelect,
    Prisma.attendancesWhereInput
  >): Promise<GetManyReturn<AttendancesEntity>> {
    const { take, skip } = this.calcTakeAndSkip(max, page);
    const [data, count] = await this.prismaService.$transaction([
      this.attendanceTableConnection.findMany({
        select,
        where: { ...where, deleted_at: null },
        take,
        skip,
      }),
      this.attendanceTableConnection.count({
        where: { ...where, deleted_at: null },
      }),
    ]);
    const pages = Math.trunc(count / max) <= 0 ? 1 : Math.trunc(count / max);
    return {
      data: data.map((value) => {
        return new AttendancesEntity(value as unknown as AttendancesEntityType);
      }),
      pages,
      perPage: max,
      total: count,
    };
  }

  public async one(
    id: number,
    params: GetManyTypeParams<
      Prisma.attendancesSelect,
      Prisma.attendancesWhereInput
    >,
  ) {
    return await this.attendanceTableConnection.findFirst({
      select: params.select,
      where: { id, ...params.where },
    });
  }
}
