import PrismaService from 'src/core/database/app/prisma.service';

export default class DeleteAttendanceRepository {
  public constructor(private readonly prismaService: PrismaService) {}

  public async one(id: number) {
    return await this.prismaService.attendances.update({
      data: {
        deleted_at: new Date(),
      },
      where: {
        id,
      },
    });
  }
}
