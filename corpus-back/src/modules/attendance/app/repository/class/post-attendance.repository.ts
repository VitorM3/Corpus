import { Prisma } from '@prisma/client';
import PrismaService from 'src/core/database/app/prisma.service';

export default class PostAttendanceRepository {
  public constructor(private readonly prismaService: PrismaService) {}

  public async one(params: Prisma.attendancesUncheckedCreateInput) {
    return await this.prismaService.attendances.create({
      data: params,
    });
  }
}
