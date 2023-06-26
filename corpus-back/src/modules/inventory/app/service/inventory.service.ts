import { Injectable } from '@nestjs/common';
import FindManyInventoryService from './providers/find-many/service';
import InventoryRepository from '../repository/inventory.repository';

@Injectable()
export default class InventoryService {
  public findMany: FindManyInventoryService;
  public constructor(private readonly repository: InventoryRepository) {
    this.findMany = new FindManyInventoryService(this.repository);
  }
}
