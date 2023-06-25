import { Prisma } from '@prisma/client';
import PrismaService from 'src/core/database/app/prisma.service';
import GetManyReturn from 'src/shared/base/domain/types/GetManyReturn';
import GetManyTypeParams from 'src/shared/base/domain/types/GetManyType';
import RoomEntity, { RoomEntityType } from '../entity/room.entity';
import BaseRepository from 'src/shared/base/repository/base.repository';

export default class GetRoomRepository extends BaseRepository {
  public constructor(private readonly prismaService: PrismaService) {
    super();
  }

  public async many({
    max,
    page,
    select,
    where,
  }: GetManyTypeParams<Prisma.roomSelect, Prisma.roomWhereInput>): Promise<
    GetManyReturn<RoomEntity>
  > {
    const { take, skip } = this.calcTakeAndSkip(max, page);
    const [data, count] = await this.prismaService.$transaction([
      this.prismaService.room.findMany({
        select,
        where: { ...where, deleted_at: null },
        take,
        skip,
      }),
      this.prismaService.room.count(),
    ]);
    const pages = Math.trunc(count / max) <= 0 ? 1 : Math.trunc(count / max);
    return {
      data: data.map((value) => {
        return new RoomEntity(value as unknown as RoomEntityType);
      }),
      pages,
      perPage: max,
      total: count,
    };
  }
}
