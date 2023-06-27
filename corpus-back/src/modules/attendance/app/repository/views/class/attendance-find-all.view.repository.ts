import PrismaService from 'src/core/database/app/prisma.service';
import { AttendanceFindAllViewType } from 'src/modules/attendance/domain/types/AttendanceFindAllView.type';
import BaseRepository from 'src/shared/base/repository/base.repository';
import ViewAttendanceFindAllEntity, {
  ViewAttendanceFindAllType,
} from '../entity/ViewAttendanceFindAll.view.entity';

export default class AttendanceFindAllViewRepository extends BaseRepository {
  public constructor(
    private readonly attendanceViewFindAll: AttendanceFindAllViewType,
    private readonly prismaService: PrismaService,
  ) {
    super();
  }

  public async many(
    max: number,
    page: number,
    namePacient: string,
    nameDoctor: string,
  ) {
    const { take, skip } = this.calcTakeAndSkip(max, page);
    const [data, count] = await this.prismaService.$transaction([
      this.attendanceViewFindAll.findMany({
        where: {
          pacient_name: namePacient,
          doctor_name: nameDoctor,
        },
        take,
        skip,
      }),
      this.attendanceViewFindAll.count(),
    ]);
    const pages = Math.trunc(count / max) <= 0 ? 1 : Math.trunc(count / max);
    return {
      data: data.map((value) => {
        return new ViewAttendanceFindAllEntity(
          value as unknown as ViewAttendanceFindAllType,
        );
      }),
      pages,
      perPage: max,
      total: count,
    };
  }
}
