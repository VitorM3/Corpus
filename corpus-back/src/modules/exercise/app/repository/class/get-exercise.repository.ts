import { Prisma } from '@prisma/client';
import PrismaService from 'src/core/database/app/prisma.service';
import { ExerciseTableType } from 'src/modules/exercise/domain/types/ExerciseTable';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import GetManyTypeParams from 'src/shared/base/domain/types/GetManyType';
import BaseRepository from 'src/shared/base/repository/base.repository';
import ExerciseEntity, { ExerciseEntityType } from '../entity/exercise.entity';

export default class GetExerciseRepository extends BaseRepository {
  public constructor(
    private readonly exerciseTableConnection: ExerciseTableType,
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
    Prisma.exerciseSelect,
    Prisma.exerciseWhereInput
  >): Promise<GetManyReturn<ExerciseEntity>> {
    const { take, skip } = this.calcTakeAndSkip(max, page);
    const [data, count] = await this.prismaService.$transaction([
      this.exerciseTableConnection.findMany({
        select,
        where,
        take,
        skip,
      }),
      this.exerciseTableConnection.count(),
    ]);
    const pages = Math.trunc(count / max) <= 0 ? 1 : Math.trunc(count / max);
    return {
      data: data.map((value) => {
        return new ExerciseEntity(value as unknown as ExerciseEntityType);
      }),
      pages,
      perPage: max,
      total: count,
    };
  }
}
