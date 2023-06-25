import PrismaService from 'src/core/database/app/prisma.service';
import PacientViewRepository from './class/get-pacient.view.repository';

export default class ViewsPacientRepository {
  public pacient: PacientViewRepository;

  public constructor(private readonly prismaService: PrismaService) {
    this.pacient = new PacientViewRepository(
      this.prismaService.vw_pacient,
      this.prismaService,
    );
  }
}
