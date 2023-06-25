import { Prisma } from '@prisma/client';
import PrismaService from 'src/core/database/app/prisma.service';

export default class UpdateAttendanceRepository {
  public constructor(private readonly prismaService: PrismaService) {}

  public async one(id: number, data: Prisma.attendancesUncheckedUpdateInput) {
    return await this.prismaService.attendances.update({
      data,
      where: {
        id,
      },
    });
  }
}
