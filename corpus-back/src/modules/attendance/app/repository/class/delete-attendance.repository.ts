import PrismaService from 'src/core/database/app/prisma.service';

export default class DeleteAttendanceRepository {
  public constructor(private readonly prismaService: PrismaService) {}

  public async one(id: number) {
    await this.prismaService.$transaction([
      this.prismaService.$executeRaw`SET IDENTITY_INSERT attendances ON`,
      this.prismaService.attendances.update({
        data: {
          deleted_at: new Date(),
        },
        where: {
          id,
        },
      }),
      this.prismaService.$executeRaw`SET IDENTITY_INSERT attendances OFF`,
    ]);
    return;
  }
}
