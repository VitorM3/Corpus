import { Injectable } from '@nestjs/common';
import ViewsPacientRepository from './view/ViewPacient.view';
import PrismaService from 'src/core/database/app/prisma.service';

@Injectable()
export default class PacientRepository {
  public views: ViewsPacientRepository;

  public constructor(private readonly prismaService: PrismaService) {
    this.views = new ViewsPacientRepository(this.prismaService);
  }
}
