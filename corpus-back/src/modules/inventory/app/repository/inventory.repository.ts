import PrismaService from 'src/core/database/app/prisma.service';
import GetInventoryRepository from './class/get-inventory.repository';
import { Injectable } from '@nestjs/common';

@Injectable()
export default class InventoryRepository {
  public get: GetInventoryRepository;
  public constructor(private readonly prismaService: PrismaService) {
    this.get = new GetInventoryRepository(
      this.prismaService.inventory,
      this.prismaService,
    );
  }
}
