import PrismaService from 'src/core/database/app/prisma.service';
import { DoctorViewType } from 'src/modules/employee/domain/types/DoctorView';
import BaseRepository from 'src/shared/base/repository/base.repository';
import ViewDoctorEntity, {
  ViewDoctorEntityType,
} from '../entity/ViewDoctor.view';
import GetManyTypeParams from 'src/shared/base/domain/types/GetManyType';
import { Prisma } from '@prisma/client';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';

export default class DoctorViewRepository extends BaseRepository {
  public constructor(
    private readonly doctorViewConnection: DoctorViewType,
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
    Prisma.vw_doctorSelect,
    Prisma.vw_doctorWhereInput
  >): Promise<GetManyReturn<ViewDoctorEntity>> {
    const { take, skip } = this.calcTakeAndSkip(max, page);
    const [data, count] = await this.prismaService.$transaction([
      this.doctorViewConnection.findMany({
        select,
        where,
        take,
        skip,
      }),
      this.doctorViewConnection.count(),
    ]);
    const pages = Math.trunc(count / max) <= 0 ? 1 : Math.trunc(count / max);
    return {
      data: data.map((value) => {
        return new ViewDoctorEntity(value as unknown as ViewDoctorEntityType);
      }),
      pages,
      perPage: max,
      total: count,
    };
  }
}
