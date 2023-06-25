import { Prisma } from '@prisma/client';
import PrismaService from 'src/core/database/app/prisma.service';
import { PacientViewType } from 'src/modules/pacient/domain/types/PacientTable.type';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import GetManyTypeParams from 'src/shared/base/domain/types/GetManyType';
import BaseRepository from 'src/shared/base/repository/base.repository';
import ViewPacientEntity, {
  ViewPacientEntityType,
} from '../entity/ViewPacient.view.entity';

export default class PacientViewRepository extends BaseRepository {
  public constructor(
    private readonly pacientTableConnection: PacientViewType,
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
    Prisma.vw_pacientSelect,
    Prisma.vw_pacientWhereInput
  >): Promise<GetManyReturn<ViewPacientEntity>> {
    const { take, skip } = this.calcTakeAndSkip(max, page);
    const [data, count] = await this.prismaService.$transaction([
      this.pacientTableConnection.findMany({
        select,
        where,
        take,
        skip,
      }),
      this.pacientTableConnection.count({ where }),
    ]);
    const pages = Math.trunc(count / max);
    return {
      data: data.map((value) => {
        return new ViewPacientEntity(value as unknown as ViewPacientEntityType);
      }),
      pages,
      perPage: max,
      total: count,
    };
  }
}
