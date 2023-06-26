import { Prisma } from '@prisma/client';
import PrismaService from 'src/core/database/app/prisma.service';
import { ExerciseTableType } from 'src/modules/exercise/domain/types/ExerciseTable';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import GetManyTypeParams from 'src/shared/base/domain/types/GetManyType';
import BaseRepository from 'src/shared/base/repository/base.repository';
import InventoryEntity, {
  InventoryEntityType,
} from '../entity/inventory.entity';
import { InventoryTableType } from '../../../domain/types/InventoryTable';

export default class GetInventoryRepository extends BaseRepository {
  public constructor(
    private readonly inventoryTableConnection: InventoryTableType,
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
  >): Promise<GetManyReturn<InventoryEntity>> {
    const { take, skip } = this.calcTakeAndSkip(max, page);
    const [data, count] = await this.prismaService.$transaction([
      this.inventoryTableConnection.findMany({
        select,
        where: { ...where, deleted_at: null },
        take,
        skip,
      }),
      this.inventoryTableConnection.count(),
    ]);
    const pages = Math.trunc(count / max) <= 0 ? 1 : Math.trunc(count / max);
    return {
      data: data.map((value) => {
        return new InventoryEntity(value as unknown as InventoryEntityType);
      }),
      pages,
      perPage: max,
      total: count,
    };
  }
}
